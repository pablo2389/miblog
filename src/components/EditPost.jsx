import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './EditPost.module.css';

const EditPost = ({ posteos, setPosteos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const posteo = posteos.find((post) => post.id === Number(id));

  const [titulo, setTitulo] = useState(posteo.title);
  const [contenido, setContenido] = useState(posteo.content);

  const handleEdit = (e) => {
    e.preventDefault();

    // Actualizar el posteo en el array de posteos
    const updatedPosteos = posteos.map((post) =>
      post.id === Number(id) ? { ...post, title: titulo, content: contenido } : post
    );

    setPosteos(updatedPosteos);
    navigate(`/posteos/${id}`); // Redirigir a la vista de detalle después de editar
  };

  return (
    <div className={styles.container}>
      <h2>Editar Posteo {id}</h2>
      <form onSubmit={handleEdit}>
        <input 
          type="text" 
          value={titulo} 
          onChange={(e) => setTitulo(e.target.value)} 
          placeholder="Título" 
        />
        <textarea 
          value={contenido} 
          onChange={(e) => setContenido(e.target.value)} 
          placeholder="Contenido" 
        />
        <button type="submit" className={styles.saveButton}>Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditPost;
