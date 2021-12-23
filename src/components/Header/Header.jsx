import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';

// import styles from './Header.module.css';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2a363b',
  },
};

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
