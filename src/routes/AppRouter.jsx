import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import PostList from '../components/PostList';
import CrearPosteo from '../components/CrearPosteo';
import PostDetail from '../components/PostDetail';
import Navbar from '../components/Navbar';
import PrivateRoute from './PrivateRoute';
import Login from '../components/Login';
import EditPost from '../components/EditPost'; // Importar el componente EditPost

const AppRouter = ({ posteos, setPosteos }) => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posteos" element={<PostList posteos={posteos} />} />
        <Route path="/posteos/:id" element={<PostDetail posteos={posteos} />} />
        <Route path="/editar/:id" element={<EditPost posteos={posteos} setPosteos={setPosteos} />} /> {/* Pasar las props */}
        <Route path="/crear" element={<PrivateRoute><CrearPosteo /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
