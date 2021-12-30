const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getContactId = state => state.phonebook.contacts.id;
const isRefreshCurrentUser = state => state.auth.isRefreshCurrentUser;
const registerUserRejected = state => state.auth.registerUserRejected;
const userLogInRejected = state => state.auth.userLogInRejected;
const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getContactId,
  isRefreshCurrentUser,
  registerUserRejected,
  userLogInRejected,
};
export default authSelectors;
