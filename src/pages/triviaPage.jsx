import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import QuestionCard from "../components/questionCard";
import { fetchQuestions } from "../services/api";

const TriviaPage = () => {
  const location = useLocation();
  const { value1:category,value2: difficulty } = location.state || {};
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (category && difficulty) {
        fetchQuestions(category, difficulty)
          .then((data) => {
            setQuestions(data);
            setLoading(false);
          })
          .catch((error) => console.error("Error al cargar las preguntas:", error));
      }
      console.log("Opciones seleccionadas:",  category, difficulty);
    }, 1000); // Espera 1 segundo antes de hacer la solicitud
  
    return () => clearTimeout(timeout); // Limpia el timeout si el usuario cambia la página rápido
    
  }, [category, difficulty]);

  // Actualizar respuestas mezcladas solo cuando cambia la pregunta actual
  useEffect(() => {
    if (questions.length > 0) {
      const currentQuestion = questions[currentIdx];
      const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
      setShuffledAnswers(answers.sort(() => Math.random() - 0.5));
    }
  }, [questions, currentIdx]);

  const handleAnswerSelect = (answer) => {
    if (!showFeedback) {
      setSelectedAnswer(answer);
    }
  };

  const handleConfirm = () => {
    if (!selectedAnswer) return;

    const currentQuestion = questions[currentIdx];
    setShowFeedback(true);

    const isCorrect = selectedAnswer === currentQuestion.correct_answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentIdx < questions.length - 1) {
        setCurrentIdx((prev) => prev + 1);
      } else {
        alert(`Fin de la trivia. Tu puntaje: ${score + (isCorrect ? 1 : 0)} / ${questions.length}`);
        setCurrentIdx(0);
        setScore(0);
      }
      setSelectedAnswer(null);
      setShowFeedback(false);
    }, 1500);
    
  };

  if (loading) return <p className="text-center mt-8">Cargando preguntas...</p>;
  if (questions.length === 0) return <p className="text-center mt-8">No se encontraron preguntas.</p>;

  return (
    <div className="container">
      <h1>Trivia Lab</h1>
      <p>Puntaje: {score}</p>
      <p>Pregunta {currentIdx + 1} de {questions.length}</p>

      <QuestionCard
        question={questions[currentIdx].question}
        answers={shuffledAnswers}
        onAnswerClick={handleAnswerSelect}
        selectedAnswer={selectedAnswer}
        disabled={showFeedback}
      />

      <button
        disabled={!selectedAnswer || showFeedback}
        onClick={handleConfirm}
        className="confirm-button"
      >
        Confirmar
      </button>
    </div>
  );
  
};

export default TriviaPage;
