const API_URL = "https://opentdb.com/api.php?amount=5&type=multiple";
//`https://opentdb.com/api.php?${amount}&${category}&${difficulty}&type=multiple`
export const fetchQuestions = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error al cargar las preguntas");
  }
  const data = await response.json();
  return data.results; // retorna el array de preguntas
};