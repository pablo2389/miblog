import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import PostList from '../components/PostList';
import CrearPosteo from '../components/CrearPosteo';
import PostDetail from '../components/PostDetail';
import Navbar from '../components/Navbar';
import PrivateRoute from './PrivateRoute';
import Login from '../components/Login';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posteos" element={<PostList />} />
        <Route path="/posteos/:id" element={<PostDetail />} />
        <Route path="/crear" element={<PrivateRoute><CrearPosteo /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
