export const fetchQuestions = async (value1, value2) => {
  
  const categoryParam = value1 ? `category=${value1}` : ""; 
  const difficultyParam = value2 ? `difficulty=${value2}` : "";
  
  const API_URL = `https://opentdb.com/api.php?amount=10&${categoryParam}&${difficultyParam}&type=multiple`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al cargar las preguntas");
    }
    const data = await response.json();
    
    return data.results;
  } catch (err) {
    console.error("Error al cargar las preguntas:", err);
    return []; 
  }
};
