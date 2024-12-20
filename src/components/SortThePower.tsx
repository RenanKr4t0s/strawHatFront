//Conclusão
// Depois de pensar muito percebi que aqui temos dois alerts diferentes:
    //Um para trocar de turno em mandar calcular os efeitos
    //Outro para informar e aplicar os efeitos calculados

import { Dispatch, SetStateAction } from 'react';
import {Character} from "../playables"

type SortThePowerProps = {
    stateCharacter: Character;
    setStateCharacter: Dispatch<SetStateAction<Character>>;
    setShowSortThePower: Dispatch<SetStateAction<boolean>>;
  };

export default function SortThePower({stateCharacter, setStateCharacter, setShowSortThePower}:SortThePowerProps){
    type Chances = {
        name:string,
        chance: number,
        efect: ()=>void,
    }
    const random = Math.random()
    let itemSorteado: string = "";
    let efeitoSorteado: ()=>void;

    function setEnergyNew(howMuch:number):void{
        setStateCharacter(prevState =>({
            ...prevState,
            initialEnergy: prevState.initialEnergy + howMuch
        }))
    }
    function setLifeNew(howMuch:number):void{
        setStateCharacter(prevState =>({
            ...prevState,
            life: prevState.life + howMuch
        }))
    }
    function powerUp(){
        setStateCharacter(prevState=>({
            ...prevState,
            life: prevState.life + prevState.transformation.bonusLife,
            attackOne:{
                ...prevState.attackOne,
                power : prevState.attackOne.power + prevState.transformation.bonusPower,
                energyCost : prevState.attackOne.energyCost + prevState.transformation.bonusEnergyCost,
            },
            attackTwo:{
                ...prevState.attackTwo,
                power: prevState.attackTwo.power + prevState.transformation.bonusPower,
                energyCost: prevState.attackTwo.energyCost + prevState.transformation.bonusEnergyCost,  
            },
        }))
    }

    const itens: Chances[]=[
        {
            name : "basicEnergy",
            chance : stateCharacter.basicEnergy.chance,
            efect : ()=>setEnergyNew(stateCharacter.basicEnergy.quantity),
        },
        {
            name: "secondEnergy",
            chance:stateCharacter.secondEnergy.chance,
            efect : ()=>setEnergyNew(stateCharacter.secondEnergy.quantity),
        },
        {
            name: "lifeBonus",
            chance:stateCharacter.lifeBonus.chance,
            efect : ()=>setLifeNew(stateCharacter.lifeBonus.quantity)
        },
        {
            name: "transformation",
            chance:stateCharacter.transformation.chance,
            efect: ()=>powerUp(),
        },
    ]
    const itensComChanceAcumulada = itens.map((item, index, array) => {
        const previousChance = index > 0 ? array[index - 1].chance : 0; // Chance acumulada do item anterior
        return {
          ...item,
          chance: previousChance + item.chance
        };
      });
      

      for (let i = 0; i < itensComChanceAcumulada.length; i++) {
        if (random <= itensComChanceAcumulada[i].chance) {
          itemSorteado = itensComChanceAcumulada[i].name;
          efeitoSorteado = itensComChanceAcumulada[i].efect;
          break;
        }
      }
      function handleClick(){
        if (!efeitoSorteado) {
            alert("Problema ao sortear o efeito");
        }
        efeitoSorteado()
        setShowSortThePower(false)
      }

    return(
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
                <h1 className="text-2xl font-bold mb-4">Seu bônus da Rodada é:</h1>
                <h2 className="text-xl font-semibold text-orange-500">{itemSorteado}</h2>
                <button onClick={handleClick} className="bg-red-400 w-40 h-8 rounded m-1">
                    <h1>Aplicar efeito</h1>
                </button>
            </div>
        </div>
    )
}