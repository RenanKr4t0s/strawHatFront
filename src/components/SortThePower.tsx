import { Dispatch, SetStateAction } from 'react';
import {Character} from "../playables"

type SortThePowerProps = {
    stateCharacter: Character;
    setStateCharacter: Dispatch<SetStateAction<Character>>;
  };

type setEnergyNew = (howMuch: number) => void;

export default function SortThePower({stateCharacter, setStateCharacter}:SortThePowerProps){
    type Chances = {
        name:string,
        chance: number,
        efect: void,
    }

    function setEnergyNew(howMuch:number):void{
        setStateCharacter(prevState =>({
            ...prevState,
            initialEnergy: prevState.initialEnergy + howMuch
        })
            //pegar tudo que já tinha e somar a energy o valor de howMuch
        )
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
            efect : setEnergyNew(stateCharacter.basicEnergy.quantity),
        },
        {
            name: "secondEnergy",
            chance:stateCharacter.secondEnergy.chance,
            efect : setEnergyNew(stateCharacter.secondEnergy.quantity),
        },
        {
            name: "lifeBonus",
            chance:stateCharacter.lifeBonus.chance,
            efect : setLifeNew(stateCharacter.lifeBonus.quantity)
        },
        {
            name: "transformation",
            chance:stateCharacter.transformation.chance,
            efect: powerUp(),
        },
    ]
    const itensComChanceAcumulada = itens.map((item, index, array) => {
        const previousChance = index > 0 ? array[index - 1].chance : 0; // Chance acumulada do item anterior
        return {
          ...item,
          chance: previousChance + item.chance
        };
      });
      
      console.log(itensComChanceAcumulada);
      const random = Math.random()
      let itemSorteado: string = "";

      for (let i = 0; i < itensComChanceAcumulada.length; i++) {
        if (random <= itensComChanceAcumulada[i].chance) {
          itemSorteado = itensComChanceAcumulada[i].name;
          break;
        }
      }

    return(
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
                <h1 className="text-2xl font-bold mb-4">Seu bônus da Rodada é:</h1>
                <h2 className="text-xl font-semibold text-orange-500">{itemSorteado}</h2>
            </div>
        </div>
    )
}