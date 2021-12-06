-- Dê uma pesquisada agora na tabela sakila.actor usando o comando SELECT * FROM sakila.actor e veja que temos uma coluna first_name e outra chamada last_name
SELECT * FROM sakila.actor;

-- Faça uma query que mostre agora o nome e sobrenome juntos, em uma coluna
SELECT
  CONCAT (first_name, ' ', last_name) AS full_name
  FROM sakila.actor;

-- Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme
SELECT
  CONCAT(title, ' - ', release_year) AS `Lançamento do Filme`
  FROM sakila.film;

-- Na tabela sakila.film , crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação . Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis
SELECT
  CONCAT(title, ' - ', rating) AS `Classificação`
  FROM sakila.film;

-- Na tabela sakila.address , monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço
SELECT
  CONCAT (address, ' - ', district) AS 'Endereço'
  FROM sakila.address;