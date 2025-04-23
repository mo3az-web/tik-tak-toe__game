import useState from "react"
import App from "../App"



export default function GameOver({winner,onRestart}){
    
    return <div id= "game-over">
        <h2>game over!</h2>
        {winner && <p>{winner} won !</p>}
        {!winner && <p>draw!</p>}
        
        <p>
        <button onClick={onRestart}>play again?</button>
        </p>
    </div>
}