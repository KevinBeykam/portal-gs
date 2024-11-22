import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizText.css';

const QuizText = () => {
  const navigate = useNavigate();

  
  const questions = [
    {
      question: "Qual é a principal tecnologia emergente no setor de energia?",
      options: ["Energia solar", "Energia nuclear", "Hidrogênio verde", "Carros elétricos"],
      answer: 2, 
    },
    {
      question: "O Brasil tem potencial para ser líder em qual tipo de energia renovável?",
      options: ["Energia solar", "Energia de biomassa", "Energia eólica", "Energia geotérmica"],
      answer: 0,
    },
    {
      question: "Qual é o maior desafio para a transição energética no Brasil?",
      options: ["Infraestrutura para geração de energia solar", "Dependência da energia hidrelétrica", "Falta de incentivos governamentais", "Baixa adoção de carros elétricos"],
      answer: 1,
    },
    {
      question: "O que são as “smart grids” (redes inteligentes)?",
      options: ["Redes de distribuição de energia que usam IA para otimizar o consumo", "Redes elétricas que utilizam energia solar", "Redes de infraestrutura de veículos elétricos", "Redes que distribuem apenas energia renovável"],
      answer: 0,
    },
    {
      question: "Como o hidrogênio verde pode contribuir para o futuro energético?",
      options: ["Substituindo as baterias em carros elétricos", "Como combustível para aviões e navios", "Gerando energia apenas durante o dia", "Aumentando a eficiência das usinas hidrelétricas"],
      answer: 1,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  
  const handleAnswer = (index) => {
    console.log(`Resposta dada: ${index}, Resposta correta: ${questions[currentQuestion].answer}`);
  
    if (index === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1); 
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
              <button
                key={index}
                onClick={() => handleAnswer(index)}
              >
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
