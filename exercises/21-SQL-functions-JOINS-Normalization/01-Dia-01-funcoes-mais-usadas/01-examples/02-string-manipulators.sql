-- Example 01
SELECT UCASE(title) FROM sakila.film LIMIT 10;

-- Example 02
SELECT LCASE(title) FROM sakila.film LIMIT 10;

-- Example 03
SELECT REPLACE(title, 'ACADEMY', 'TESTE') FROM sakila.film WHERE film_id = 1;

-- Example 04
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;

-- Example 05
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;

-- Example 06
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;

-- Example 07
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;

-- Example 08
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;
