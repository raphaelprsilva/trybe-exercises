-- Ordenar os dados pelo endereço, de maneira ascendente
SELECT 
    *
FROM
    sakila.address
ORDER BY address;

-- Ordenar os dados pelo endereço, de maneira descendente
SELECT 
    *
FROM
    sakila.address
ORDER BY address DESC;

-- Ordenar os dados pelo endereço, de maneira ascendente e depois pelo distrito de maneira descendente
SELECT 
    *
FROM
    sakila.address
ORDER BY address , district DESC;

-- Faça uma query que ordene os distritos de maneira ascendente e os endereços de maneira descendente
SELECT 
    *
FROM
    sakila.address
ORDER BY district , address DESC;