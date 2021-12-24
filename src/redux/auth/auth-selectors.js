const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const isRefreshCurrentUser = state => state.auth.isRefreshCurrentUser;
const registerUserRejected = state => state.auth.registerUserRejected;
const userLogInRejected = state => state.auth.userLogInRejected;
const authSelectors = {
  getIsLoggedIn,
  getUsername,
  isRefreshCurrentUser,
  registerUserRejected,
  userLogInRejected,
};
export default authSelectors;
