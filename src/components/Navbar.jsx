import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Importación de estilos

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/" className={styles.a}>Home</Link>
        </li>
        <li className={styles.li}>
          <Link to="/posteos" className={styles.a}>Posteos</Link>
        </li>
        <li className={styles.li}>
          <Link to="/crear" className={styles.a}>Crear Posteo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
