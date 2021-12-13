-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais
-- (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT M.title, BO.domestic_sales, BO.international_sales
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON M.id = BO.movie_id;

-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número
-- de vendas para cada filme que possui um número maior de vendas internacionais
-- ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT M.title, (BO.domestic_sales + BO.international_sales) AS 'Vendas'
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON M.id = BO.movie_id
WHERE BO.domestic_sales < BO.international_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes
-- e sua avaliação ( rating ) em ordem decrescente.
SELECT M.title, BO.rating
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON M.id = BO.movie_id
ORDER BY BO.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os
-- dados dos cinemas, mesmo os que não possuem filmes em cartaz e,
-- adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas.
-- Retorne os nomes dos cinemas em ordem alfabética.
SELECT T.name, T.location, M.title, M.director, M.year, M.length_minutes
FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M
ON T.id = M.id
ORDER BY T.name;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os
-- dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os
-- dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos
-- cinemas em ordem alfabética.
