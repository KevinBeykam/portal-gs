import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Bem-vindo de volta!</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Digite seu e-mail" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha" />
          </div>
          <button type="submit" className="login-button">Entrar</button>
          <p className="signup-text">
            Não tem uma conta? <a href="#">Cadastre-se</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
