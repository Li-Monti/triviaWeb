"use client"
import { useNavigate } from "react-router-dom"

const WinModal = ({ score, onClose }) => {
  const navigate = useNavigate()

  const handleRestart = () => {
    navigate("/")
  }

  return (
    <div className="win-modal-overlay">
      <div className="win-modal">
        <h2>¡Felicidades!</h2>
        <p>
          Has ganado con un puntaje de {score}/50
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

export default WinModal
