const API_URL = "http://localhost:5000/api/trivia";

export const fetchQuestions = async (category, difficulty) => {
    const response = await fetch(`${API_URL}?category=${category}&difficulty=${difficulty}`);
    const data = await response.json();
    return data.results;
};