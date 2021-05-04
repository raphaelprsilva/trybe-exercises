let movies = ['Star Wars', 'Star trek', 'Jaws', 'Jurassic Park',
'Mad Max', 'Casino Royale', 'Almost famoues'];

let keyWord = 'Star';
let keyWord2 = 'Max';

let test1 = movies.some((title, index) => {
  console.log(index, title);
  return title.indexOf(keyWord) > -1;
});

let test2 = movies.some((title) => {
  if (title.indexOf(keyWord2) > -1) {
    console.log(title);
    return console.log(`Pelo menos um filme tem a palavra ${keyWord2}`);
  }
},);