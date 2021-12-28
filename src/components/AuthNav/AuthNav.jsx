import { NavLink } from 'react-router-dom';
const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#1976d2',
  },
};
export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/login"
        // style={styles.link}
        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      >
        Log In
      </NavLink>
      <NavLink
        to="/registration"
        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      >
        Registration
      </NavLink>
    </div>
  );
}
