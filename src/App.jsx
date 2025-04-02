import { useState, useEffect } from "react";
import Quiz from "./components/Quiz";

const App = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/trivia")
            .then(res => res.json())
            .then(data => {
                setQuestions(
                    data.results.map(q => ({
                        question: q.question,
                        answers: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
                        correct_answer: q.correct_answer,
                    }))
                );
            });
    }, []);

    return (
        <div>
            <h1>Trivia App</h1>
            {questions.length > 0 ? <Quiz questions={questions} /> : <p>Cargando preguntas...</p>}
        </div>
    );
};

export default App;
