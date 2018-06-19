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
    case 'subscriber':
      userGroup = USER_GROUP_SUBSCRIBER;
      break;
    case 'registered':
      userGroup = USER_GROUP_REGISTERED;
      break;
    default:
      userGroup = USER_GROUP_ANONYMOUS;
  }
  return userGroup;
};

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
