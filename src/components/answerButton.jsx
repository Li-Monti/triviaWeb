"use client"

const AnswerButton = ({ text, onClick, isSelected, disabled, isCorrect, showFeedback }) => {
  // Determine the CSS class based on selection and correctness
  const getButtonClass = () => {
    let className = "answer-button"

    if (isSelected) {
      className += " selected"
    }

    // Only show correctness colors when feedback is being shown
    if (showFeedback) {
      if (isCorrect) {
        className += " correct"
      } else {
        // Show all incorrect answers in red during feedback
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
