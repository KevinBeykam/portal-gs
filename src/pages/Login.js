import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/home');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

   
    if (email.trim() === 'admin' && password.trim() === '12345') {
      
      localStorage.setItem('isLoggedIn', 'true');
      setErrorMessage('');
      navigate('/home'); 
    } else {
      setErrorMessage('E-mail ou senha incorretos.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Bem-vindo de volta!</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">Entrar</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p className="signup-text">
            Não tem uma conta? <a href="#">Cadastre-se</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
