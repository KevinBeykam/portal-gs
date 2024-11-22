import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizImages.css';

const QuizImages = () => {
  const navigate = useNavigate();
  const questions = [
    {
      question: "Qual estado brasileiro possui a energia mais sustentável?",
      images: [
        { src: "/images/rio-grande-do-norte.jpg", alt: "Rio Grande do Norte" },
        { src: "/images/rio-grande-do-sul.jpg", alt: "Rio Grande do Sul" },
        { src: "/images/acre.jpg", alt: "Acre" },
        { src: "/images/mato-grosso-do-sul.jpg", alt: "Mato Grosso do Sul" },
      ],
      answer: 0,
    },
    {
      question: "O que é energia de biomassa?",
      images: [
        { src: "/images/biomassa.jpg", alt: "Biomassa" },
        { src: "/images/eol.jpg", alt: "Eolica" },
        { src: "/images/solar.jpg", alt: "Solar" },
        { src: "/images/us.jpg", alt: "Usina" },
      ],
      answer: 0,
    },
    {
      question: "O que caracteriza uma usina hidrelétrica?",
      images: [
        
        { src: "/images/errada1.jpg", alt: "Errada1" },
        { src: "/images/errada2.jpg", alt: "Errada2" },
        { src: "/images/fab.jpg", alt: "fab" },
        { src: "/images/correta.jpg", alt: "Correta" },
      ],
      answer: 3,
    },
    {
      question: "Como a energia solar contribui para a preservação ambiental? ",
      images: [
        
        { src: "/images/carro.jpg", alt: "Errada1" },
        { src: "/images/fab2.jpg", alt: "Errada2" },
        { src: "/images/casa.jpg", alt: "correta" },
       
      ],
      answer: 2,
    },
    {
      question: "Qual principal desafio para obter carros elétricos? ",
      images: [
        
        { src: "/images/recarga.jpg", alt: "correta" },
        { src: "/images/2.jpg", alt: "Errada2" },
        { src: "/images/fabrica.jpg", alt: "errada" },
       
      ],
      answer: 0,
    },
    {
      question: "Como a energia sustentável pode impulsionar a economia local e global?",
      images: [
        
        { src: "/images/grafico.jpg", alt: "errada" },
        { src: "/images/reci.jpg", alt: "errada" },
        { src: "/images/pain.jpg", alt: "correta" },
       
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
