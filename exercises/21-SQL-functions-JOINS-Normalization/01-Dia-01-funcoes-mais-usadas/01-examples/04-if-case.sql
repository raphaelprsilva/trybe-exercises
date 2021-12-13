SELECT 
    title,
    rental_rate,
    IF(rental_rate = 4.99, 'Caro', 'Barato') AS status
FROM
    sakila.film;

SELECT 
    title,
    rental_rate,
    CASE
			WHEN rental_rate = 0.99 THEN 'Custo de Aluguel Barato'
      WHEN rental_rate = 2.99 THEN 'Custo de Aluguel Médio'
      WHEN rental_rate = 4.99 THEN 'Custo de Aluguel Caro'
      ELSE 'Custo indefinido'
		END AS 'Status do aluguel'
FROM
    sakila.film;

SELECT 
    title,
    rental_rate,
    CASE
        WHEN rental_rate = 0.99 THEN 'Custo de Aluguel Barato'
        WHEN rental_rate = 2.99 THEN 'Custo de Aluguel Médio'
        WHEN rental_rate = 4.99 THEN 'Custo de Aluguel Caro'
        ELSE 'Custo indefinido'
    END AS 'Status do aluguel'
FROM
    sakila.film
ORDER BY title
LIMIT 10;