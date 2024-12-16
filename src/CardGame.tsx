import { Link } from "react-router-dom"
import CardForP1 from "./components/CardForP1"
import CardForP2 from "./components/CardForP2"


import playables from "./playables"
import { useState } from "react"

export default function CardGame() {
    const [p1Turno, setP1Turno] = useState(true)
    const [player1, setPlayer1] = useState(playables["zoro"])
    const [player2, setPlayer2] = useState(playables["enel"])
    function toggleTurno(){
        setP1Turno(!p1Turno)
    }
  return (
    <div className="h-screen flex justify-center">
        <div className="p-6 text-center space-y-8 bg-slate-300 w-full md:w-3/4 max-w-4xl m-8">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">Straw Hat Card Game</h1>
            <div className="flex gap-3">
                <div className="w-96 bg-slate-400">
                    <CardForP1 
                        stateCharacter={player1}
                        setStateCharacter={setPlayer1}
                        stateEnemy={player2}
                        setStateEnemy={setPlayer2}
                        p1Turno={p1Turno}
                        toggleTurno={toggleTurno}
                    />
                </div>
                <div className="w-16 flex items-center">
                    <h2>Player vs Player</h2>
                </div>
                <div className="w-96 bg-slate-400">
                    <CardForP1 
                        stateCharacter={player2}
                        setStateCharacter={setPlayer2}
                        stateEnemy={player1}
                        setStateEnemy={setPlayer1}
                        p1Turno={p1Turno}
                        toggleTurno={toggleTurno}
                    />
                </div>
            </div>



            {/* Criar aqui o "Escolha os personagens" com um Button para o P1 e outro para o P2 escolher entre as possibilidades */}



            <Link to={"/"} className=" inline-block text-zinc-200 bg-yellow-600 rounded-lg py-2 px-4 hover:bg-yellow-800 hover:text-zinc-50 transition-colors"  >Voltar para Home
            </Link>
        </div>
    </div>
  )   
}
