const getUserId = (state = {}) => {
  let userId = state.ec_uid;
  if (!userId) {
    const userCookie = state['Econ.user.user'];
    if (userCookie) {
      try {
        userId = JSON.parse(decodeURIComponent(userCookie)).uid;
      } catch (e) {
        // can't parse cookie
      }
    }
  }
  return userId || 0;
};

const isMultiUserLicense = (state = {}) => state.ec_community > 0;

const getSubscription = (state = {}) => {
  const subscriptionCookie =
    state.ec_omniture_user_sub &&
    decodeURIComponent(state.ec_omniture_user_sub);
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
    key.startsWith('PERSISTENT_LOGIN_')
  );
  return state.ec_uid || persistentLogin;
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
};
