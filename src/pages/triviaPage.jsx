import React, { useEffect, useState } from "react";
import QuestionCard from "../components/questionCard";
import { fetchQuestions } from "../services/api";

const triviaPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await fetchQuestions();
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar las preguntas:", error);
      }
    };
    loadQuestions();
  }, []);

  // Actualizar las respuestas mezcladas solo cuando cambia la pregunta actual
  useEffect(() => {
    if (questions.length > 0) {
      const currentQuestion = questions[currentIdx];
      const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
      const shuffled = answers.sort(() => Math.random() - 0.5);
      setShuffledAnswers(shuffled);
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

    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore((prev) => prev + 1);
      alert("¡Correcto!");
    } else {
      alert(`Incorrecto. La respuesta correcta era: ${currentQuestion.correct_answer}`);
    }

    setTimeout(() => {
      if (currentIdx < questions.length - 1) {
        setCurrentIdx((prev) => prev + 1);
      } else {
        alert(
          `Fin de la trivia. Tu puntaje: ${
            score + (selectedAnswer === currentQuestion.correct_answer ? 1 : 0)
          } / ${questions.length}`
        );
        // Reiniciar el juego (opcional)
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
      <div>
        <h1>Trivia Lab</h1>
        <p>Puntaje: {score}</p>
        <p>
          Pregunta {currentIdx + 1} de {questions.length}
        </p>
      </div>
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

export default triviaPage;
