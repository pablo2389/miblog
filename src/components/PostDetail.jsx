import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './PostDetail.module.css'; // Importación de estilos

const PostDetail = () => {
  const { id } = useParams();
  console.log(`Este es el posteo ID: ${id}`);

  return (
    <div className={styles.container}>
      <h2>Detalle del Posteo {id}</h2>
      <p>Mostrando detalles del posteo con ID {id}...</p>
    </div>
  );
};

export default PostDetail;
