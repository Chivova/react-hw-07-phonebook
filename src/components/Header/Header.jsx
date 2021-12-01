import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation';
import styles from './Header.module.css';

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//   },
// };

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
      <AuthNav />
    </header>
  );
}
