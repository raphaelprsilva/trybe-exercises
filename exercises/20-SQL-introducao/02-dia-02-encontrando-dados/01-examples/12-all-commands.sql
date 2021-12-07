-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT 
    *
FROM
    sakila.film;

-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
SELECT 
    title, release_year, rental_duration
FROM
    sakila.film;

-- Quantos filmes temos cadastrados?
SELECT 
    COUNT(*)
FROM
    sakila.film;