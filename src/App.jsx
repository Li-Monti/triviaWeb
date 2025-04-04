import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/menuPage";
import TriviaPage from "./pages/triviaPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/trivia" element={<TriviaPage />} />
      </Routes>
    </Router>
  );
};
export default App;
