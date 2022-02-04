// Estamos importando o módulo do node-fetch
const fetch = require('node-fetch');

const endPoint = 'https://postman-echo.com/post?param1=teste';

// Numa aplicação real, esse token viria do Local Storage ou de uma variável de ambiente
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

const headers = new fetch.Headers({
  Authorization: API_TOKEN,
  'Content-type': 'application/json',
});

const body = JSON.stringify({
  name: 'Raphael',
  email: 'rapha@email.com',
  password: 'rapha123'
});

fetch(endPoint, { method: 'POST', body, headers })
  .then((response) => {
    // Existe um objeto 'response' com a chave 'ok'?
    // Esse objeto é falsy? Se sim, response.ok = false => !response.ok = true
    // Isso significa que entraremos no if, e que a Promise será rejeitada
    console.log('response.ok:', response.ok);
    if (!response.ok) return Promise.reject(response);

    // Caso a 'response' esteja ok, retornaremos a resposta como json.
    return response.json();
  })
  .then((data) => {
    // Nos mostre o 'data' no console
    console.log('data:', data);
  })
  .catch((errorOrResponse) => {
    // Caso ocorra uma falha, ou seja, o status é diferente de 2xx
    // Iremos logar o status no console
    if (errorOrResponse.status) {
      return console.log(`Request failed with status: ${errorOrResponse}`);
    }

    // Caso tenha acontecido algum erro na rede, logamos o mesmo
    console.error(errorOrResponse);
  })