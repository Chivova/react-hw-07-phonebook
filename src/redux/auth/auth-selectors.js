const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const isRefreshCurrentUser = state => state.auth.isRefreshCurrentUser;
const registerUserRejected = state => state.auth.registerUserRejected;
const authSelectors = {
  getIsLoggedIn,
  getUsername,
  isRefreshCurrentUser,
  registerUserRejected,
};
export default authSelectors;
