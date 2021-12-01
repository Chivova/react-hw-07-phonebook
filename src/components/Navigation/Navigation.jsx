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
    color: '#E84A5F',
  },
};

export default function Navigation() {
  return (
    <nav>
      <NavLink exact to="/" style={styles.link} activestyle={styles.activeLink}>
        Home
      </NavLink>
      <NavLink
        exact
        to="/contacts"
        style={styles.link}
        activestyle={styles.activeLink}
      >
        Contacts
      </NavLink>
    </nav>
  );
}
