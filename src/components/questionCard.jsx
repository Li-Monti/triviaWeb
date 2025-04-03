import React from "react";
import AnswerButton from "./AnswerButton";

const questionCard = ({ question, answers, onAnswerClick, selectedAnswer, disabled }) => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default questionCard;
