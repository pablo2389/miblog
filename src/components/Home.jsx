// src/components/Home.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import styles from './Home.module.css';

const Home = () => {
  const { isAuthenticated, username } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <h1>Bienvenido a Mi Blog</h1>
      {isAuthenticated ? (
        <p>Hola, {username}!</p>
      ) : (
        <p>Usuario desconocido</p>
      )}
    </div>
  );
};

export default Home;
