const criptoCoinsList = document.querySelector('[data-js="cripto-coins-list"]');

const fetchCoins = async () => {
  const API_URL = `https://api.coincap.io/v2/assets`;

  try {
    const response = await fetch(API_URL);
    const coinsObject = await response.json();
    const { data } = coinsObject;
    return data;
  } catch (error) {
    console.log(`Deu ruim filho(a). \n${error}`);
  }
};


const setCoins = async () => {
  const coinsData = await fetchCoins();
  console.log(coinsData);

  coinsData
    .filter((coin) => coin.rank <= 10)
    .map(({ name, symbol, priceUsd }) => {
      const coinListItem = document.createElement('li');
      coinListItem.innerHTML = `
        ${name} (${symbol}): ${Number(priceUsd).toFixed(2)}`;
      criptoCoinsList.appendChild(coinListItem);
    });
};

setCoins();