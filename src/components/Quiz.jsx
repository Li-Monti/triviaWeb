import { useState, useEffect } from "react";

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
        setSelectedAnswer(null); // Reiniciar la selección al cambiar de pregunta
    }, [currentQuestion]);

    const handleAnswer = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === questions[currentQuestion].correct_answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz-container">
            {showScore ? (
                <h2>Tu puntaje final es: {score}/{questions.length}</h2>
            ) : (
                <div>
                    <h3>{questions[currentQuestion].question}</h3>
                    {questions[currentQuestion].answers.map((answer, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(answer)}
                            disabled={selectedAnswer !== null}
                        >
                            {answer}
                        </button>
                    ))}
                    {selectedAnswer && (
                        <button onClick={handleNextQuestion}>Siguiente</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Quiz;
