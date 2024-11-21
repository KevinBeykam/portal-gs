import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizText.css';

const QuizText = () => {
  const navigate = useNavigate();
  const questions = [
    { question: "Qual é a capital do Brasil?", options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"], answer: 2 },
    { question: "Quanto é 5 + 3?", options: ["6", "8", "10", "9"], answer: 1 },
    { question: "Qual é a cor do céu em um dia claro?", options: ["Azul", "Verde", "Amarelo", "Vermelho"], answer: 0 },
    { question: "Qual é o maior planeta do sistema solar?", options: ["Terra", "Júpiter", "Saturno", "Marte"], answer: 1 },
    { question: "Quem pintou a Mona Lisa?", options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"], answer: 1 },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleRankingClick = () => {
    navigate('/ranking');
  };

  const handleImageQuizClick = () => {
    navigate('/quiz-images');
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div className="question-box">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(index)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result-box">
          <h1>Você acertou {score} de {questions.length} perguntas!</h1>
          <div className="result-options">
            <button onClick={handleRankingClick}>Ver Ranking</button>
            <button onClick={handleImageQuizClick}>Fazer o Quiz de Imagens</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizText;
