import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Bem-vindo ao Portal GS</h1>
          <p>Uma solução inovadora para transformar ideias em realidade.</p>
          <div className="hero-buttons">
            <a href="/quiz-text" className="btn-primary">Quiz de Perguntas</a>
            <a href="/quiz-images" className="btn-secondary">Quiz de Imagens</a>
            <a href="/login" className="btn-login">Área de Login</a>
            <a href="/ranking" className="btn-ranking">Ranking</a>
          </div>
        </div>
      </header>

      <section className="about">
        <h2>Sobre o Projeto</h2>
        <p>
          Este portal foi criado para consolidar dados e propor soluções práticas utilizando as mais recentes tecnologias em React.
        </p>
        <div className="team">
          <h3>Integrantes do Grupo</h3>
          <ul>
            <li>Kevin Beykam Alberto Corina</li>
            <li>Nome do Integrante 2</li>
            <li>Nome do Integrante 3</li>
          </ul>
        </div>
      </section>

      <section className="contact">
        <h2>Fale Conosco</h2>
        <p>Email: <a href="mailto:contato@portalgs.com">contato@portalgs.com</a></p>
        <p>Telefone: (11) 1234-5678</p>
        <p>
          Assista ao nosso <a href="https://youtube.com/video-pitch" target="_blank" rel="noopener noreferrer">Vídeo Pitch</a>.
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Portal GS. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
