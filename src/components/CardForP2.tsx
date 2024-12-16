// Esse elemento simplesmente recebe um card e mostra ele na tela
// Possíveis animações aqui
// Precisará ser totalmente refeito em termos de lógica

import {Character} from "../playables"

interface CardForGameProps {
    cardCharacter: Character;
}


export default  function CardForP2({cardCharacter}:CardForGameProps) {
    const energys = 18
    const renderEnergy:string[] = Array.from({length:energys},()=>cardCharacter.energyEmoji)
    const costattackOne = Array.from({length:cardCharacter.attackOne.energyCost},()=>cardCharacter.energyEmoji).join(' ')
    const costattackTwo = Array.from({length:cardCharacter.attackTwo.energyCost},()=>cardCharacter.energyEmoji).join(' ')
  return (
    <div className="flex">
        <div className="w-1/5 flex flex-wrap flex-col gap-1 items-start h-80 mt-5">
            {renderEnergy.map((e) => {
                return(<h1 className="text-2xl" key={e}>{e}</h1>)
            })}
        </div>
        <div className="w-4/5 m-2 bg-slate-600 p-2">
            <div className="flex flex-row">
                <div className="w-1/5 bg-cyan-200 text-center"><h3>{cardCharacter.life}</h3></div>
                <div className="w-4/5 bg-cyan-200 text-center"><h1>{cardCharacter.name}</h1></div>
            </div>
            <div className="flex justify-center p-2 bg-slate-200 my-1">
                <img src={cardCharacter.image} className="w-40 rounded"></img>
            </div>
            <div className="flex bg-cyan-200 my-1">
                <p className="w-1/6 my-auto">{cardCharacter.attackOne.power}</p>
                <button className="w-3/6 bg-slate-400 hover:bg-slate-600 my-4 mx-2 py-1 rounded">{cardCharacter.attackOne.name}</button>
                <p className="w-2/6 my-auto">{costattackOne}</p>
            </div>
            <div className="flex bg-cyan-200 my-1">
                <p className="w-1/6 my-auto">{cardCharacter.attackTwo.power}</p>
                <button className="w-3/6 bg-slate-400 hover:bg-slate-600 my-4 mx-2 py-1 rounded">{cardCharacter.attackTwo.name}</button>
                <p className="w-2/6 my-auto">{costattackTwo}</p>
            </div>
            <div className="flex bg-cyan-200 my-1 justify-start">
            <button className="bg-red-400 w-8 h-8 rounded m-1">
                <h1>🚫</h1>
            </button>
            </div>
        </div>
      
    </div>
  )
}


