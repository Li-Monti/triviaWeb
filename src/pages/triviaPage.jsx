"use client"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import QuestionCard from "../components/questionCard"
import WinModal from "../components/winModal"
import EndModal from "../components/loseModal"
import { fetchQuestions } from "../services/api"

export function TriviaPage() {
  const location = useLocation()
  const { value1: category, value2: difficulty } = location.state || {}

  const [questions, setQuestions] = useState([])
  const [questionIdx, setQuestionIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [shuffledAnswers, setShuffledAnswers] = useState([])
  const [showWinModal, setShowWinModal] = useState(false)
  const [showEndModal, setShowEndModal] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (category && difficulty) {
        fetchQuestions(category, difficulty)
          .then((data) => {
            setQuestions(data)
            setLoading(false)
          })
          .catch((error) => console.error("Error al cargar las preguntas:", error))
      }
      console.log("Opciones:", category, difficulty)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [category, difficulty])

  useEffect(() => {
    if (questions.length > 0 && questionIdx < questions.length) {
      const currentQuestion = questions[questionIdx]
      const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
      setShuffledAnswers(answers.sort(() => Math.random() - 0.5))
    }
  }, [questions, questionIdx])

  const handleAnswerSelect = (answer) => {
    if (!showFeedback) {
      setSelectedAnswer(answer)
    }
  }

  const handleConfirm = () => {
    if (!selectedAnswer) return

    const currentQuestion = questions[questionIdx]
    setShowFeedback(true)

    const isCorrect = selectedAnswer === currentQuestion.correct_answer
    if (isCorrect) {
      setScore((prev) => prev + 10)
    }

    setTimeout(() => {
      if (questionIdx < questions.length - 1) {
        setQuestionIdx((prev) => prev + 1)
      } else {
        if (score + (isCorrect ? 10 : 0) >= 70) {
          setShowWinModal(true)
        } else {
          setShowEndModal(true)
        }
      }

      setSelectedAnswer(null)
      setShowFeedback(false)
    }, 1500)
  }

  const handleCloseWinModal = () => {
    setShowWinModal(false)
    resetTrivia()
  }

  const handleCloseEndModal = () => {
    setShowEndModal(false)
    resetTrivia()
  }

  const resetTrivia = () => {
    setQuestionIdx(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
  }

  if (loading) return <p className="text-center mt-8">Cargando preguntas...</p>
  if (questions.length === 0) return <p className="text-center mt-8">No se encontraron preguntas.</p>

  return (
    <div className="container">
      <h1>Trivia Lab</h1>
      {!showWinModal && !showEndModal && (
        <>
          <p>Puntaje: {score}</p>
          <p>
            Pregunta {questionIdx + 1} de {questions.length}
          </p>

          <QuestionCard
            question={questions[questionIdx].question}
            answers={shuffledAnswers}
            onAnswerClick={handleAnswerSelect}
            selectedAnswer={selectedAnswer}
            disabled={showFeedback}
            correctAnswer={questions[questionIdx].correct_answer}
            showFeedback={showFeedback}
          />

          <button
            disabled={!selectedAnswer || showFeedback}
            onClick={handleConfirm}
            className="confirm-button"
          >
            Confirmar
          </button>
        </>
      )}

      {showWinModal && (
        <WinModal
          score={score}
          totalQuestions={questions.length}
          onClose={handleCloseWinModal}
        />
      )}
      {showEndModal && (
        <EndModal
          score={score}
          totalQuestions={questions.length}
          onClose={handleCloseEndModal}
        />
      )}
    </div>
  )
}

export default TriviaPage
