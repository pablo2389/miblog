// src/api/posteos.js
import client from './client';

// Obtener todos los posteos del usuario
export const getPosteos = async (usuario) => {
  try {
    const response = await client.get(`/posteos/${usuario}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posteos:', error);
    throw error;
  }
};

// Crear un nuevo posteo
export const createPosteo = async (usuario, posteo) => {
  try {
    const response = await client.post(`/posteos/${usuario}`, posteo);
    return response.data;
  } catch (error) {
    console.error('Error creating posteo:', error);
    throw error;
  }
};

// Leer un posteo específico
export const getPosteoDetail = async (usuario, posteoId) => {
  try {
    const response = await client.get(`/posteos/${usuario}/detail/${posteoId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posteo detail:', error);
    throw error;
  }
};

// Modificar un posteo
export const updatePosteo = async (usuario, posteoId, posteo) => {
  try {
    const response = await client.put(`/posteos/${usuario}/detail/${posteoId}`, posteo);
    return response.data;
  } catch (error) {
    console.error('Error updating posteo:', error);
    throw error;
  }
};

// Eliminar un posteo
export const deletePosteo = async (usuario, posteoId) => {
  try {
    await client.delete(`/posteos/${usuario}/detail/${posteoId}`);
  } catch (error) {
    console.error('Error deleting posteo:', error);
    throw error;
  }
};
