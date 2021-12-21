import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import LoginView from 'views/LoginView';

export default function PrivateRoute({ restricted = false, children }) {
  console.log(children);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to="/contacts" /> : <LoginView />;
}
