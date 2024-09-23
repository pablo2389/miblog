import React, { useState } from 'react';

const PostForm = ({ agregarPosteo }) => {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [usuario, setUsuario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPosteo = {
      id: Math.floor(Math.random() * 1000),  // Genera un ID aleatorio
      titulo,
      texto,
      user_id: Math.floor(Math.random() * 100),  // Simula un user_id
      usuario
    };

    agregarPosteo(nuevoPosteo);

    // Limpiar el formulario
    setTitulo('');
    setTexto('');
    setUsuario('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Texto:</label>
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label>Usuario:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
      </div>
      <button type="submit">Agregar Posteo</button>
    </form>
  );
};

export default PostForm;
