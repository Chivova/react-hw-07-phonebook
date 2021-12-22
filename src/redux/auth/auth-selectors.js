const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const isRefreshCurrentUser = state => state.auth.isRefreshCurrentUser;
const authSelectors = {
  getIsLoggedIn,
  getUsername,
  isRefreshCurrentUser,
};
export default authSelectors;
