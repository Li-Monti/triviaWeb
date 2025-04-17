# 🎮 Trivia Game - README

<div align="center">
  <img src="./public/pregunta.png" alt="Captura de pantalla del juego" width="400">
</div>

## 📝 Descripción
Una trivia de preguntas, en la cual tendras que responder 10 preguntas. Desarrollada con React, consume la API de [Open Trivia DB](https://opentdb.com/api_config.php).

## ✨ Características
- 🔍 Selección de categorías y dificultad
- ❓ 10 preguntas por ronda
- 🎨 Diseño responsive con CSS
- 🏆 Sistema de puntuación
- 💡 Retroalimentación inmediata

## 🛠️ Tecnologías
| Frontend          | Backend          | Herramientas      |
|-------------------|------------------|-------------------|
| React             | OpenTrivia API   | Vite              |
| JavaScript (JSX)  |                  | Git               |
| CSS               |                  | npm               |

## 📂 Estructura
```bash
src/
├── assets/
├── components/
│   ├── answerButton.jsx
│   ├── loseModal.jsx
│   ├── questionCard.jsx
│   └── winModal.jsx
├── pages/
│   ├── menuPage.jsx
│   └── triviaPage.jsx
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── styles.css

Instalación
# 1. Clonar repositorio
git clone https://github.com/tu-usuario/trivia-game.git

# 2. Instalar dependencias
npm install

# 3. Iniciar la app
npm run dev

Informacion sobre la API
// Ejemplo para consultar a la API
fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium")
    const data = await response.json();
    return data.results;


Contribuidores
<table> <tr> <td align="center"> <a href="https://github.com/nicoediaz93"> <img src="https://avatars.githubusercontent.com/nicoediaz93" width="100px;" alt="Nicolás Díaz"/> <br/> <sub><b>nicoediaz93</b></sub> </a> </td> <td align="center"> <a href="https://github.com/juanrolando"> <img src="https://avatars.githubusercontent.com/juanrolando" width="100px;" alt="Juan Rolando"/> <br/> <sub><b>Juan Rolando</b></sub> </a> </td> <td align="center"> <a href="https://github.com/li-monti"> <img src="https://avatars.githubusercontent.com/li-monti" width="100px;" alt="Li Monti"/> <br/> <sub><b>Li-Monti</b></sub> </a> </td> </tr> </table>

