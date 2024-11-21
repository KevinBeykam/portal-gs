import React from 'react';
import './Ranking.css';

function Ranking() {
  const rankings = [
    { position: 1, name: "Kevin Beykam", score: 150 },
    { position: 2, name: "João Silva", score: 120 },
    { position: 3, name: "Ana Clara", score: 110 },
    { position: 4, name: "Maria Souza", score: 100 },
    { position: 5, name: "Pedro Santos", score: 90 },
  ];

  return (
    <div className="ranking-container">
      <h1>Ranking dos Melhores Usuários</h1>
      <table className="ranking-table">
        <thead>
          <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th>Pontuação</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((user) => (
            <tr key={user.position}>
              <td>{user.position}</td>
              <td>{user.name}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ranking;
