import luffyImage from "./assets/luffy512.png"
import zoroImage from "./assets/zoro512.jpg"
import enelImage from "./assets/enel512.jpeg"

type Attack = {
    energyCost : number,
    name:string,
    power:number
}
type Energy={
    quantity:number,
    chance:number,
}
type LifeBonus={
    quantity:number,
    chance:number,
}
type Transformation={
    bonusLife:number,
    bonusPower:number,
    bonusEnergyCost:number,
    rounds:number,
    chance:number,
}
type Character={
    id:string,
    name:string,
    life:number,
    image:string,
    energyEmoji:string,
    atackOne: Attack,
    atackTwo: Attack,
    basicEnergy: Energy
    secondEnergy: Energy
    lifeBonus: LifeBonus
    transformation: Transformation,
}


const luffy:Character = {
    id: "STR00",
    name: "Luffy",
    life: 100,
    image : luffyImage,
    energyEmoji: "🍗",
    atackOne:{
        energyCost: 3,
        name: "Jet Pistol",
        power: 40,
    },
    atackTwo:{
        energyCost: 6,
        name: "Bazoooka",
        power: 90,
    },
    basicEnergy:{
        quantity:1,
        chance:0.3,
    },
    secondEnergy:{
        quantity:2,
        chance:0.3,
    },
    lifeBonus:{
        quantity:0,
        chance:0,
    },
    transformation:{
        bonusLife:90,
        bonusPower:20,
        bonusEnergyCost: 1,
        rounds:3,
        chance: 0.4
    }
}
const zoro: Character = {
    id: "STR01",
    name: "Zoro",
    life: 120,
    image: zoroImage,
    energyEmoji: "⚔️",
    atackOne: {
      energyCost: 1,
      name: "Nitoriu",
      power: 10,
    },
    atackTwo: {
      energyCost: 3,
      name: "Santoryu Ougi",
      power: 40,
    },
    basicEnergy:{
        quantity:1,
        chance:0.35,
    },
    secondEnergy:{
        quantity:3,
        chance:0.35,
    },
    lifeBonus:{
      quantity:0,
      chance:0,
  },
    transformation: {
      bonusLife: 40,
      bonusPower: 20,
      bonusEnergyCost: 2,
      rounds: 4,
      chance: 0.3,
    },
};
  const enel: Character = {
    id: "BAD01",
    name: "Enel",
    life: 150,
    image: enelImage,
    energyEmoji: "⚡",
    atackOne: {
      energyCost: 6,
      name: "Raigou",
      power: 50,
    },
    atackTwo: {
      energyCost: 9,
      name: "El Thor",
      power: 100,
    },
    basicEnergy: {
      quantity: 2,
      chance: 0.4,
    },
    secondEnergy: {
      quantity: 0,
      chance: 0,
    },
    lifeBonus: {
      quantity: 10,
      chance: 0.5,
    },
    transformation: {
      bonusLife: 100,
      bonusPower: 40,
      bonusEnergyCost: -2,
      rounds: 2,
      chance: 0.1,
    },
};

const playables: { [key: string]: Character } = {
    luffy,zoro,enel,
}

export default playables
export type {Character}
