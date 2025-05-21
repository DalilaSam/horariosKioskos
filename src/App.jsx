import React, { useState } from 'react';
import Login from './components/Login';
import Seleccion from './components/Seleccion'; // el componente que quieres mostrar tras login
import "./App.css";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '1234') {
      setIsAuthenticated(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div>
      {isAuthenticated ? <Seleccion /> : <Login onLogin={handleLogin} />}
    </div>
  );
}
