// Esse elemento simplesmente recebe um card e mostra ele na tela
// Possíveis animações aqui

import { useState } from "react";
import {Character} from "../playables"
import SortThePower from "./SortThePower";

interface CardForGameProps {
    stateCharacter: Character;
    setStateCharacter: React.Dispatch<React.SetStateAction<Character>>;
    stateEnemy: Character;
    setStateEnemy: React.Dispatch<React.SetStateAction<Character>>;
    p1Turno: boolean;
    toggleTurno: ()=>void;
}


export default  function CardForP1({
    stateCharacter, setStateCharacter,
    stateEnemy, setStateEnemy,
    p1Turno, toggleTurno

}:CardForGameProps) {
    const renderEnergy:string[] = Array.from({length:stateCharacter.initialEnergy},()=>stateCharacter.energyEmoji)
    const costattackOne:string = Array.from({length:stateCharacter.attackOne.energyCost},()=>stateCharacter.energyEmoji).join(' ')
    const costattackTwo:string = Array.from({length:stateCharacter.attackTwo.energyCost},()=>stateCharacter.energyEmoji).join(' ')
    const [showSortThePower, setShowSortThePower] = useState(false)


    function handleattack(e: React.MouseEvent<HTMLButtonElement>){
        const theAttack: string = (e.target as HTMLButtonElement).name // isso me retorna "attackOne"
        const thisAttack = theAttack==="attackOne"?stateCharacter.attackOne: stateCharacter.attackTwo
        const thisPower:number = thisAttack.power;
        const thisEnergyCost:number = thisAttack.energyCost;

        if(stateCharacter.initialEnergy>=thisEnergyCost){
            setStateCharacter((prevState)=>({
                ... prevState,
                initialEnergy: prevState.initialEnergy - thisEnergyCost,

            }));
            setStateEnemy((prevState) => ({
                ...prevState, // Copia todas as outras propriedades do estado anterior
                life: prevState.life - thisPower, // Atualiza apenas o campo "life"
            })); 
            toggleTurno()
            console.log(stateEnemy.life)
            setShowSortThePower(true)
            
        }else{
            alert("A quantidade de energia não permite o atque")
        }
    }
    function handleSkip(){
        toggleTurno()
        if(p1Turno){alert("Turno do player 2")} 
        else{alert("Turno do player 1")}
        setShowSortThePower(true)
    }

  return (
    <div className="flex">
        {showSortThePower && (
            <SortThePower
                stateCharacter={stateEnemy}
                setStateCharacter={setStateEnemy}
                setShowSortThePower={setShowSortThePower}
            />
        )} 
        <div className="w-4/5 m-2 bg-slate-600 p-2">
            <div className="flex flex-row">
                <div className="w-4/5 bg-cyan-200 text-center"><h1>{stateCharacter.name}</h1></div>
                <div className="w-1/5 bg-cyan-200 text-center"><h3>{stateCharacter.life}</h3></div>
            </div>
            <div className="flex justify-center p-2 bg-slate-200 my-1">
                <img src={stateCharacter.image} className="w-40 rounded"></img>
            </div>
            <div className="flex bg-cyan-200 my-1">
                <p className="w-2/6 my-auto">{costattackOne}</p>
                <button name="attackOne" className="w-3/6 bg-slate-400 hover:bg-slate-600 my-4 mx-2 py-1 rounded" 
                    onClick={(e)=>{handleattack(e)}}>{stateCharacter.attackOne.name}
                </button>
                <p className="w-1/6 my-auto">{stateCharacter.attackOne.power}</p>
            </div>
            <div className="flex bg-cyan-200 my-1">
                <p className="w-2/6 my-auto">{costattackTwo}</p>
                <button name="attackTwo" className="w-3/6 bg-slate-400 hover:bg-slate-600 my-4 mx-2 py-1 rounded"
                    onClick={(e)=>{handleattack(e)}}>{stateCharacter.attackTwo.name}
                </button>
                <p className="w-1/6 my-auto">{stateCharacter.attackTwo.power}</p>
            </div>
            <div className="flex bg-cyan-200 my-1 justify-end">
            <button onClick={handleSkip} className="bg-red-400 w-8 h-8 rounded m-1">
                <h1>🚫</h1>
            </button>
            </div>
        </div>
        <div className="w-1/5 flex flex-wrap flex-col gap-1 items-start h-80 mt-5">
        {renderEnergy.map((e) => {
            return(<h1 className="text-2xl" key={e}>{e}</h1>)
        })}
        </div>
      
    </div>
  )
}


