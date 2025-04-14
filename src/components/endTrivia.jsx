"use client"
import { useNavigate } from "react-router-dom"

const EndModal = ({ score, onClose }) => {
  const navigate = useNavigate()

  const handleRestart = () => {
    navigate("/")
  }

  return (
    <div className="win-modal-overlay">
      <div className="win-modal">
        <h2>¡Malas Noticias!</h2>
        <p>Trivia Finalizada</p>
        <p>
          Has perdido, tu puntaje fue {score}/100
        </p>
        <div className="win-modal-buttons">
          <button className="restart-button" onClick={handleRestart}>
            Volver al Menú
          </button>
          <button className="close-button" onClick={onClose}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}

export default EndModal
