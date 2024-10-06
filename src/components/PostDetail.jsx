// src/components/PostDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './PostDetail.module.css';

const PostDetail = ({ posteos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const posteo = posteos.find((post) => post.id === Number(id));

  if (!posteo) {
    return <h2>Posteo no encontrado</h2>;
  }

  return (
    <div className={styles.container}>
      <h2>Detalle del Posteo {id}</h2>
      <p>{posteo.contenido}</p>
      <button onClick={() => navigate(`/editar/${id}`)} className={styles.editButton}>Modificar</button>
    </div>
  );
};

export default PostDetail;
