import React, { useState, useEffect } from 'react';

const PostForm = ({ agregarPosteo, posteoEditado }) => {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [usuario, setUsuario] = useState('');

  // Efecto para cargar los datos del posteo a editar
  useEffect(() => {
    if (posteoEditado) {
      setTitulo(posteoEditado.titulo);
      setTexto(posteoEditado.texto);
      setUsuario(posteoEditado.usuario);
    } else {
      // Limpiar el formulario si no hay posteo a editar
      setTitulo('');
      setTexto('');
      setUsuario('');
    }
  }, [posteoEditado]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPosteo = {
      id: posteoEditado ? posteoEditado.id : Math.floor(Math.random() * 1000), // Usar el ID existente o generar uno nuevo
      titulo,
      texto,
      user_id: posteoEditado ? posteoEditado.user_id : Math.floor(Math.random() * 100), // Mantener el user_id si es un posteo existente
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
      <button type="submit">{posteoEditado ? 'Modificar Posteo' : 'Agregar Posteo'}</button>
    </form>
  );
};

export default PostForm;
