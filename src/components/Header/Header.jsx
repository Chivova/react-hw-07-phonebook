import Navigation from 'components/Navigation';
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};
export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
