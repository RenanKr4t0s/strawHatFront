import { Link } from "react-router-dom"
import CardForP1 from "./components/CardForP1"
import CardForP2 from "./components/CardForP2"


import playables from "./playables"

export default function CardGame() {
  return (
    <div className="bg-red-300 h-screen flex justify-center">
        <div className="p-6 text-center space-y-8 bg-slate-300 w-full md:w-3/4 max-w-4xl m-8">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">Straw Hat Card Game</h1>
            <div className="flex gap-3">
                <div className="w-96 bg-slate-400">
                    <CardForP1 cardCharacter={playables["zoro"]} />
                </div>
                <div className="w-16 bg-red-200 flex items-center">
                    <h2>Player vs Player</h2>
                </div>
                <div className="w-96 bg-slate-400">
                    <CardForP2 cardCharacter={playables["zoro"]} />
                </div>
            </div>
            <p className="text-gray-600">Aqui nós vamos construir toda a aplicação de Game</p>

            <Link to={"/"} className=" inline-block text-zinc-200 bg-yellow-600 rounded-lg py-2 px-4 hover:bg-yellow-800 hover:text-zinc-50 transition-colors"  >Voltar para Home
            </Link>
        </div>
    </div>
  )   
}
