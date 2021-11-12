const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const countLettersA = (word) => {
  const wordAsArray = word.split('');
  const numberOfLettersA = wordAsArray
    .reduce((acc, letter) => {
      const isLetterA = letter === 'A' || letter === 'a';
      if (isLetterA) acc += 1;
      return acc;
    }, 0);

  return numberOfLettersA;
};

const getAllLettersA = (books) => {
  return books
    .reduce((acc, book) => acc + countLettersA(book), 0);
};

console.log(getAllLettersA(names));
