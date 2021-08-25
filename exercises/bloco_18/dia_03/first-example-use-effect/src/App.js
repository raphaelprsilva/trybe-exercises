import React, { useEffect, useState } from 'react';

const App = () => {
  const [product, setProduct] = useState(null);
  const [items, setItems] = useState(null);

  useEffect(() => {
    const localProduct = localStorage.getItem('produto');
    console.log('localProduct:', localProduct);
    localProduct && setProduct(localProduct);
  }, []);

  useEffect(() => {
    !product &&
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
        .then((response) => response.json())
        .then((data) => setItems(data));
  }, [product]);

  useEffect(() => {
    product && localStorage.setItem('produto', product);
  }, [product]);

  const handleClick = ({ target }) => {
    setProduct(target.textContent);
  }

  return (
    <>
      <h1>Preferência: {product}</h1>
      <div>
        <button type="button" onClick={handleClick}>notebook</button>
        <button type="button" onClick={handleClick}>smartphone</button>
      </div>
      {
        !items && (
          <div>
            <h2>Nome: { items.nome }</h2>
            <span>Preço: R$ { items.preco }</span>
          </div>
        )
      }
    </>
  )
}

export default App;
