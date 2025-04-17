"use client"

const AnswerButton = ({ text, onClick, isSelected, disabled, isCorrect, showFeedback }) => {
  const getButtonClass = () => {
    let className = "answer-button"

    if (isSelected) {
      className += " selected"
    }

    if (showFeedback) {
      if (isCorrect) {
        className += " correct"
      } else {
        className += " incorrect"
      }
    }

    return className
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={getButtonClass()}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default AnswerButton
