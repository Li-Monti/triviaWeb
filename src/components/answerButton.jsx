import React from "react";

const answerButton = ({ text, onClick, isSelected, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`answer-button ${isSelected ? "selected" : ""}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default answerButton;
