import { useNavigate } from "react-router-dom"

export function EndModal ({ score, onClose}) {
  const navigate = useNavigate()

  const handleRestart = () => {
    navigate("/")
  }



  return (
    <div className="lose-modal-overlay">
      <div className="lose-modal">
        <h2>¡Malas Noticias!</h2>
        <p>Trivia Finalizada</p>
        <p>
          Has perdido, tu puntaje fue {score}/100
        </p>
        <div className="lose-modal-buttons">
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
