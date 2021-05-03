const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 102,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// ---------------------------------------------------------------------------------
const calculateDamageDragon = (strength) => {
  const minDamage = 15;
  const damage = Math.floor(Math.random() * (strength - minDamage) ) + minDamage;
  return damage;
};

const dragonStrength = Object.values(battleMembers)[2].strength;
console.log(calculateDamageDragon(dragonStrength));
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------
const calculateDamageWarrior = (strength, weaponDmg) => {
  const maxDamage = weaponDmg * strength;
  const damage = Math.floor(Math.random() * (maxDamage - strength) ) + strength;
  return damage;
};

const warriorStrength = Object.values(battleMembers)[1].strength;
const warriorWeaponDmg = Object.values(battleMembers)[1].weaponDmg;

console.log(calculateDamageWarrior(warriorStrength, warriorWeaponDmg));
// ---------------------------------------------------------------------------------

const calculateDamageAndManaMage = (inteligence, mana) => {
  
  const damageAndMandaStatus = {
    damageStatus: 'Não possui mana suficiente',
    manaSpent: 0
  };
  
  if (mana > 15) {
    const maxDamage = inteligence * 2;
    const damage = Math.floor(Math.random() * (maxDamage - inteligence) ) + inteligence;
    const manaSpent = 15;
    const currentMana = mana - manaSpent;
    return {
      damage,
      currentMana,
    };
  }
  return damageAndMandaStatus;
};

const mageIntelligence = Object.values(battleMembers)[0].intelligence;
const mageMana = Object.values(battleMembers)[0].mana;

console.log(calculateDamageAndManaMage(mageIntelligence, mageMana));

const gameActions = {
  warriorShift: (callback) => {
    const warriorDamage = callback();
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
};

console.log(gameActions.warriorShift(calculateDamageWarrior));