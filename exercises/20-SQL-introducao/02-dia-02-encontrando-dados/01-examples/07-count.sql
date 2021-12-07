USE sakila.actor;

SELECT COUNT(first_name) FROM sakila.actor;

SELECT COUNT(DISTINCT first_name) FROM sakila.actor;

SELECT COUNT(*) FROM sakila.address;

SELECT COUNT(address2) FROM sakila.address;

SELECT COUNT(district) AS `Distrito`
  FROM sakila.address
  WHERE district = 'Alberta';

SELECT COUNT(address2) AS `Campos Vazios`
  FROM sakila.address
  WHERE address2 = '';