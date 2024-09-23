import React, { useState } from 'react';
import PostForm from './PostForm';
import styles from './PostList.module.css'; // Importación de estilos

const PostList = () => {
  const [posteos, setPosteos] = useState([
    {
      id: 12,
      titulo: "Spiderman",
      texto: "Joven héroe con poderes arácnidos que combate el crimen balanceándose por Nueva York.",
      user_id: 7,
      usuario: "stan_lee"
    },
    {
      id: 14,
      titulo: "X-MEN",
      texto: "Equipo de mutantes con habilidades únicas que luchan por la coexistencia pacífica entre humanos y mutantes.",
      user_id: 7,
      usuario: "stan_lee"
    },
    {
      id: 16,
      titulo: "Capitán América",
      texto: "Soldado mejorado con un escudo indestructible que lidera a los Vengadores en la defensa del mundo.",
      user_id: 7,
      usuario: "stan_lee"
    },
    {
      id: 17,
      titulo: "Thanos",
      texto: "Titán obsesionado con el poder y las Gemas del Infinito, busca la aniquilación para equilibrar el universo.",
      user_id: 7,
      usuario: "stan_lee"
    },
    {
      id: 18,
      titulo: "Ant-Man",
      texto: "Héroe capaz de encogerse y controlar insectos con un traje especial para combatir el mal.",
      user_id: 7,
      usuario: "stan_lee"
    }
  ]);

  const agregarPosteo = (nuevoPosteo) => {
    setPosteos([nuevoPosteo, ...posteos]); // Agrega el nuevo posteo al principio del array
  };

  const handleLeer = (id) => {
    alert(`LEER posteo ID: ${id}`);
  };

  const handleModificar = (id) => {
    alert(`MODIFICAR posteo ID: ${id}`);
  };

  return (
    <div className={styles.container}> {/* Clase de estilo */}
      <PostForm agregarPosteo={agregarPosteo} />
      {posteos.map((posteo) => (
        <div key={posteo.id} className={styles.postCard}> {/* Clase de estilo */}
          <h2>{posteo.titulo}</h2>
          <p>{posteo.texto}</p>
          <button className={styles.button} onClick={() => handleLeer(posteo.id)}>Leer</button> {/* Clase de estilo */}
          <button className={styles.button} onClick={() => handleModificar(posteo.id)}>Modificar</button> {/* Clase de estilo */}
        </div>
      ))}
    </div>
  );
};

export default PostList;
