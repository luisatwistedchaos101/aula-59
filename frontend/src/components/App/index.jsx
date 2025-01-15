import Header from '../Header'
import './style.css'
import runAway from "../../assets/Run.jpg"
import seekBar from "../../assets/SeekBar.png"

export default function App() {
  return (
    <>
      <Header title="Tocando Agora" />
      <div>
      <img src ={runAway} alt="capaMusica"></img>
        <h2 className = "text-lg w-6 h-6 font-bold">Runaway(U&I)</h2>
      </div>
      <div>
        <h3 className="text-lg w-5 h-5 font-extralight">Galantis</h3>
      </div>
      <div>
        <img className = "" src = {seekBar} alt = "barra"></img>
      </div>
    </>
  )
}
