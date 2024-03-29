-- 1. Monte uma query que exiba o id do ator , nome do ator e id do
-- filme em que ele já atuou usando as tabelas `actor` e `film_actor`
SELECT actor.actor_id, actor.first_name, film.film_id
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS film
ON actor.actor_id = film.actor_id;

-- 2. Use o `JOIN` para exibir o nome , sobrenome e endereço de cada
-- um dos funcionários do banco. Use as tabelas `staff` e `address`
SELECT staff.first_name, staff.last_name, address.address
FROM sakila.staff AS staff
INNER JOIN sakila.address AS address
ON staff.address_id = address.address_id;

-- 3. Exiba o id do cliente , nome e email dos primeiros 100
-- clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do
-- endereço e o nome da rua onde o cliente mora. Essas informações podem
-- ser encontradas nas tabelas `customer` e `address` .
SELECT 
    customer.customer_id,
    CONCAT(customer.first_name,
            ' ',
            customer.last_name) AS full_name,
    customer.email,
    address.address_id,
    address.address
FROM
    sakila.customer AS customer
        INNER JOIN
    sakila.address AS address ON customer.customer_id = customer.customer_id
ORDER BY full_name DESC
LIMIT 100;

-- 4. Exiba o nome , email , id do endereço , endereço e distrito dos clientes
-- que moram no distrito da California e que contêm "rene" em seus nomes.
-- As informações podem ser encontradas nas tabelas `address` e `customer` .
SELECT 
    customer.first_name,
    customer.email,
    customer.address_id,
    address.address,
    address.district
FROM
    sakila.customer AS customer
        INNER JOIN
    sakila.address AS address ON customer.address_id = address.address_id
WHERE
    address.district = 'California'
        AND customer.first_name LIKE '%RENE%';

-- 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene
-- seus resultados por nomes de forma decrescente. Exiba somente os clientes
-- ativos. As informações podem ser encontradas na tabela `address` e `customer`
SELECT 
    customer.first_name,
    COUNT(address.address) AS quantidade_endereco
FROM
    sakila.customer AS customer
        INNER JOIN
    sakila.address AS address ON customer.address_id = customer.address_id
WHERE
    customer.active = 1
GROUP BY customer.first_name
ORDER BY customer.first_name DESC , customer.last_name DESC;

-- 6. Monte uma query que exiba o nome , sobrenome e a média de valor
-- ( `amount` ) paga aos funcionários no ano de 2006. Use as tabelas `payment`
-- e `staff` . Os resultados devem estar agrupados pelo nome e sobrenome do
-- funcionário.

SELECT 
    staff.first_name, staff.last_name, AVG(payment.amount) AS `Média de Pagamento`
FROM
    sakila.staff AS staff
        INNER JOIN
    sakila.payment AS payment ON staff.staff_id = payment.staff_id
WHERE
    YEAR(payment.payment_date) = 2006
GROUP BY staff.staff_id;

-- 7. Monte uma query que exiba o id do ator , nome , id do filme e título do
-- filme , usando as tabelas `actor` , `film_actor` e `film` . Dica: você
-- precisará fazer mais de um `JOIN` na mesma query.
SELECT 
    A.actor_id, A.first_name, F.film_id, F.title
FROM
    sakila.actor AS A
        INNER JOIN
    sakila.film_actor AS FA ON A.actor_id = FA.actor_id
        INNER JOIN
    sakila.film AS F ON FA.film_id = F.film_id;
