const doingThings = (callback) => {
  callback();
};

const wakeUp = () => {console.log('Acordando!!');};

const drinkCoffee = () => {console.log('Vamos tomar café!!');};

const goBed = () => {console.log('Partiu dormir!!');};

doingThings(wakeUp);