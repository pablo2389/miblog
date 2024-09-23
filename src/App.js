import React from 'react';
import './App.css';
import { AuthProvider } from './context/AuthContext'; // Asegúrate de importar correctamente
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="App">
      {/* Envolvemos toda la aplicación con AuthProvider */}
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
