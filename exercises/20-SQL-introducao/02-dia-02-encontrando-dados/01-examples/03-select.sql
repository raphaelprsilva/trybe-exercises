-- Query com todos os dados da tabela sakila.actor;
USE sakila;
SELECT * FROM sakila.actor;

-- Escreva uma query que selecione todas as colunas da tabela city
USE sakila;
SELECT * FROM sakila.city;

-- Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer
USE sakila;
SELECT first_name, last_name FROM sakila.customer;

-- Escreva uma query que exiba todas as colunas da tabela rental
USE sakila;
SELECT * FROM sakila.rental;

-- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film
USE sakila;
SELECT * FROM sakila.film;
SELECT title, description, release_year FROM sakila.film;