import { Fragment } from 'react';
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
export default function AuthNav() {
  return (
    <div>
      <NavLink
        exat
        to="/login"
        style={styles.link}
        activestyle={styles.activeLink}
      >
        Log In
      </NavLink>
      <NavLink
        exat
        to="/registration"
        style={styles.link}
        activestyle={styles.activeLink}
      >
        Registration
      </NavLink>
    </div>
  );
}
