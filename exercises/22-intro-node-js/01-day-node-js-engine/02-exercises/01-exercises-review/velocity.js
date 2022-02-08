const readline = require('readline-sync');

const getVelocity = (distance, time) => Number((distance / time).toFixed(2));

const userDistance = readline.questionFloat('Type your distance (meters): ');
const userTime = readline.questionFloat('Type your time (seconds): ');
const userVelocity = getVelocity(userDistance, userTime);

console.log(`Your velocity is: ${userVelocity} m/s.`);
