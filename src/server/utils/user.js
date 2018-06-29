const COOKIE_USER_ID = 'ec_uid';
const COOKIE_UID = 'uid';
const COOKIE_ECON_USER = 'Econ.user.user';
const COOKIE_COMMUNITY = 'ec_community';
const COOKIE_OMNITURE_USER_SUB = 'ec_omniture_user_sub';
const COOKIE_PERSISTENT_LOGIN_PREFIX = 'PERSISTENT_LOGIN_';

const getUserId = (state = {}) => {
  let userId = state[COOKIE_USER_ID];
  if (!userId) {
    const userCookie = state[COOKIE_ECON_USER];
    if (userCookie) {
      try {
        userId = JSON.parse(decodeURIComponent(userCookie))[COOKIE_UID];
      } catch (e) {
        // can't parse cookie
      }
    }
  }
  return userId || 0;
};

const isMultiUserLicense = (state = {}) => state[COOKIE_COMMUNITY] > 0;

const USER_GROUP_ANONYMOUS = 'anonymous';
const USER_GROUP_REGISTERED = 'registered';
const USER_GROUP_SUBSCRIBER = 'subscriber';
const getUserGroup = (userType = '') => {
  let userGroup = '';
  switch (userType) {
    case 'staff':
    case 'bulk-subscriber':
    case 'digital-subscriber':
    case 'print-subscriber':
      userGroup = USER_GROUP_SUBSCRIBER;
      break;
    case 'registered':
    case 'user_register':
    case 'user_register_paywall':
    case 'user_register_homepage_overlay':
      userGroup = USER_GROUP_REGISTERED;
      break;
    default:
      userGroup = USER_GROUP_ANONYMOUS;
  }
  return userGroup;
};

export function getUserType(accessLevelCode = -1, state = {}) {
  const isMUL = isMultiUserLicense(state);
  let userType = null;
  // SUBSCRIPTION_LEVEL_BULK_SUBSCRIBER = 4;
  if (isMUL || accessLevelCode === 4) {
    return 'bulk-subscriber';
  }
  // Following the standard used in the Economist API.
  switch (accessLevelCode) {
    case 3:
      // SUBSCRIPTION_LEVEL_PRINT_SUBSCRIBER = 3;
      userType = 'print-subscriber';
      break;
    case 2:
      // SUBSCRIPTION_LEVEL_DIGITAL_SUBSCRIBER = 2;
      userType = 'digital-subscriber';
      break;
    case 1:
      // SUBSCRIPTION_LEVEL_REGISTERED = 1;
      userType = 'registered';
      break;
    case 0:
      // SUBSCRIPTION_LEVEL_SYSTEM_ROLE = 0;
      // Staff users.
      userType = 'staff';
      break;
    case -1:
    default:
      // SUBSCRIPTION_LEVEL_UNKNOWN = -1;
      userType = 'anonymous';
  }
  return userType;
}

const getSubscription = (state = {}) => {
  const subscriptionCookie =
    state[COOKIE_OMNITURE_USER_SUB] &&
    decodeURIComponent(state[COOKIE_OMNITURE_USER_SUB]);
  if (isMultiUserLicense(state)) {
    return 'bulk-IP';
  } else if (typeof subscriptionCookie === 'undefined') {
    return 'anonymous';
  }
  const ecOmnitureUserSubInfo = subscriptionCookie.split('*');
  if (typeof ecOmnitureUserSubInfo === 'undefined') {
    return subscriptionCookie;
  }
  return ecOmnitureUserSubInfo[0];
};

const isUserLoggedIn = (state = {}) => {
  const persistentLogin = Object.keys(state).some((key) =>
    key.startsWith(COOKIE_PERSISTENT_LOGIN_PREFIX)
  );
  return state[COOKIE_USER_ID] || persistentLogin;
};

const trimAdobeId = (adobeId) => {
  // Match pattern [*]*|*-*[*] where stars are words of alphanumeric characters.
  if (adobeId) {
    const match = adobeId.match(/^(\[\w+\]\w+\|)(\w+-\w+)(\[\w+\])/);
    // array index 0 is the whole adobeId, 1 is the '[CS]v1|' sub-part, index 2 is the short id we want.
    return match && match.length === 4 ? match[2] : '';
  }
  return '';
};

export {
  getUserId,
  getSubscription,
  isUserLoggedIn,
  trimAdobeId,
  isMultiUserLicense,
  getUserGroup,
  USER_GROUP_ANONYMOUS,
  USER_GROUP_REGISTERED,
  USER_GROUP_SUBSCRIBER,
};
