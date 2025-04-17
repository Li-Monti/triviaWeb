import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const MenuPage = () => {
  const [value1, setOption1] = useState("");
  const [value2, setOption2] = useState("");
  
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate("/trivia", { state: { value1, value2 } });
    console.log("Opciones seleccionadas:",  value1, value2);
  };

  return (
    <div className="container">
      <div>
        <h1>Bienvenido a Preguntame</h1>
        <p>Selecciona las opciones y presiona "Jugar" para comenzar</p>
      </div>
      <div className="menu-form">
        <div className="form-group">
          <label htmlFor="category">Seleccione la categoria:</label>
          <select
            id="category"
            value={value1}
            onChange={(e) => setOption1(e.target.value)}
          >
            <option value="">Seleccione la categoria</option>
            <option value="9">General Knowledge</option>
            <option value="10">Enterteinment: Books</option>
            <option value="11">Enterteinment: Music</option>
            <option value="12">Enterteinment: Musicals & Theatres</option>
            <option value="13">Enterteinment: Television</option>
            <option value="14">Enterteinment: Video Games</option>
            <option value="15">Enterteinment: Board Games</option>
            <option value="16">Scince & Nature</option>
            <option value="17">Scince: Computers</option>
            <option value="18">Scince: Mathematics</option>
            <option value="19">Mythology</option>
            <option value="20">Sports</option>
            <option value="21">Geography</option>
            <option value="22">History</option>
            <option value="23">Politics</option>
            <option value="24">Art</option>
            <option value="25">Celebrities</option>
            <option value="26">Animals</option>
            <option value="27">Vehicles</option>
            <option value="28">Entreteinment: Comics</option>
            <option value="29">Animals</option>
            <option value="30">Scince: Gadgets</option>
            <option value="31">Entreteinment: Japanese Anime & Manga</option>
            <option value="32">Entreteinment: Cartoon & Animations</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dificulty">Seleccione la dificultad:</label>
          <select
            id="dificulty"
            value={value2}
            onChange={(e) => setOption2(e.target.value)}
          >
            <option value="">Seleccione la dificultad</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>
      <button
        className="confirm-button"
        onClick={handlePlay}
        disabled={!value1 || !value2}
      >
        Jugar
      </button>
    </div>
  );
};

export default MenuPage;