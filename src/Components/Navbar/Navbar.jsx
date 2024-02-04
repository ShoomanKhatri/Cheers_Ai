// Navbar.js

import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        CheersAi
      </Link>
      <div className={styles.navLinks}>
        <Link to="/pricing" className={styles.navLink}>
          PRICING
        </Link>
        <Link to="/team" className={styles.navLink}>
          TEAM
        </Link>
        <Link to="/blog" className={styles.navLink}>
          BLOG
        </Link>
        <Link to="/login" className={styles.loginNavLink}>
          LOGIN
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
