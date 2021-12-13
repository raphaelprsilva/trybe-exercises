-- exemplo 01 - left join

SELECT 
    C.customer_id,
    C.first_name,
    C.last_name,
    A.actor_id,
    A.first_name,
    A.last_name
FROM
    sakila.customer AS C
        LEFT JOIN
    sakila.actor AS A ON C.last_name = A.last_name
ORDER BY C.last_name;

-- exemplo 02 - right join