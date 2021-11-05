const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (tempeartureFunction) => 
  `Mars temperature is: ${tempeartureFunction} degree Celsius`;

// imprime "Mars temperature is: 20 degree Celsius", por exemplo
console.log(sendMarsTemperature(getMarsTemperature()));
