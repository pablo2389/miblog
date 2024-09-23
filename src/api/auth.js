// src/api/auth.js
import client from './Client';

export const login = async (username, password) => {
  try {
    const response = await client.post('/login', { username, password });
    console.log(response.data); // Verifica la estructura de los datos
    return response.data; // Retorna los datos de la respuesta
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
