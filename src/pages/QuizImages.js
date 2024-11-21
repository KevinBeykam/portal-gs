import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizImages.css';

const QuizImages = () => {
  const navigate = useNavigate();
  const questions = [
    {
      question: "Qual animal é conhecido como o rei da selva?",
      images: [
        { src: "/images/tiger.jpg", alt: "Tigre" },
        { src: "/images/lion.jpg", alt: "Leão" },
        { src: "/images/elephant.jpg", alt: "Elefante" },
        { src: "/images/cheetah.jpg", alt: "Guepardo" },
      ],
      answer: 1,
    },
    {
      question: "Qual dessas frutas é uma maçã?",
      images: [
        { src: "/images/orange.jpg", alt: "Laranja" },
        { src: "/images/banana.jpg", alt: "Banana" },
        { src: "/images/apple.jpg", alt: "Maçã" },
        { src: "/images/grape.jpg", alt: "Uva" },
      ],
      answer: 2,
    },
    {
      question: "Qual planeta é conhecido como o planeta vermelho?",
      images: [
        { src: "/images/venus.jpg", alt: "Vênus" },
        { src: "/images/earth.jpg", alt: "Terra" },
        { src: "/images/mars.jpg", alt: "Marte" },
        { src: "/images/jupiter.jpg", alt: "Júpiter" },
      ],
      answer: 2,
    },
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

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="quiz-images-container">
      {!showResult ? (
        <div className="question-box">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="images-options">
            {questions[currentQuestion].images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                onClick={() => handleAnswer(index)}
                className="quiz-image"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="result-box">
          <h1>Você acertou {score} de {questions.length} perguntas!</h1>
          <div className="result-options">
            <button onClick={handleRankingClick}>Ver Ranking</button>
            <button onClick={handleHomeClick}>Ir para o Home</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizImages;
