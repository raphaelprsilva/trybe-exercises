const externalFunction = () => {
  const book = 'Sapiens: Uma breve história da humanidade';

  const internalFunction = () => {
    console.log(book.toUpperCase);
  };

  console.log(book);
  console.log(internalFunction);
};

externalFunction();