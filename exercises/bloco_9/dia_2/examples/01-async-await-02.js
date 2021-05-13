const url = 'https://jsonplaceholder.typicode.com/users'; // url para request

// Esta função comentada, tem o mesmo resultado da estrutura abaixo
// const getPosts = () => fetch(url);

// getPosts().then(response => {
//   console.log(response)
// })

const getPosts = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.log('Peguei você', error);
  }
}

getPosts();

// getPosts()
//   .catch(error => {
//     console.log('Peguei você', error);
//   });
