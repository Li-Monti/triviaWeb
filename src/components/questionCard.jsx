"use client"
import AnswerButton from "./AnswerButton"

const QuestionCard = ({ question, answers, onAnswerClick, selectedAnswer, disabled, correctAnswer, showFeedback }) => {
  return (
    <div className="question-card">
      <h2 dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer, index) => (
          <AnswerButton
            key={index}
            text={answer}
            onClick={() => onAnswerClick(answer)}
            isSelected={selectedAnswer === answer}
            disabled={disabled}
            isCorrect={answer === correctAnswer}
            showFeedback={showFeedback}
          />
        ))}
      </div>
    </div>
  )
}

export default QuestionCard
