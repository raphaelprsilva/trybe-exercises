function renderCountry (country) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const span = document.createElement('span');
  const countryFlag = document.createElement('img');

  countryFlag.src = country.flag;
  countryFlag.width = 40;

  span.innerHTML = `
    ${country.nativeName} -
    ${country.capital} -
    ${country.alpha3Code}`;
  
  li.appendChild(countryFlag);
  li.appendChild(span);
  ul.appendChild(li);
}

function fetchCountry(countryName) {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then((response) => response.json())
    .then((countries) => {
      renderCountry(countries[0]);
    });
}

const getCountries = async () => {
  try {
    await fetchCountry('uruguay');
    await fetchCountry('brazil');
    await fetchCountry('china');
    await fetchCountry('usa');
    await fetchCountry('mexico');
  } catch(error) {
    alert('Ocorreu um erro ao buscar o país.');
  }
};

// const getCountries = () => {
//   fetchCountry('brazil')
//     .then(() => fetchCountry('uruguai'))
//     .then(() => fetchCountry('venezuela'))
//     .then(() => fetchCountry('china'))
//     .then(() => fetchCountry('Russia'))
//     .catch((error) => {
//       alert('Ocorreu um erro ao tentar buscar o país.');
//     });
// };

// function getCountry(name) {
//   return fetch(`https://restcountries.eu/rest/v2/name/brazil`)
//     .then((response) => response.json())
//     .then((countries) => {
//       renderCountry(countries[0]);
//       fetch(`https://restcountries.eu/rest/v2/name/china`)
//         .then((response) => response.json())
//         .then((countries) => {
//           renderCountry(countries[0]);
//           fetch(`https://restcountries.eu/rest/v2/name/peru`)
//             .then((response) => response.json())
//             .then((countries) => {
//               renderCountry(countries[0]);
//             })
//         })
//     });
// }

window.onload = () => {
  getCountries();
};