import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import ContactsView from 'views/ContactsView/ContactsView';

export default function PrivateRout() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <ContactsView /> : <Navigate to="/login" />;
}
