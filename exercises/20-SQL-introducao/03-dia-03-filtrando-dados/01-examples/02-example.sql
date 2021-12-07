-- Encontra qualquer resultado finalizando com "don"
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '%don';

-- Encontra qualquer resultado iniciando com "plu"
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE 'plu%';

-- Encontra qualquer resultado que contém "plu"


-- Encontra qualquer resultado que inicia com "p" e finaliza com "r"


-- Encontra qualquer resultado em que o segundo caractere da frase é "C"


-- Encontra qualquer resultado em que o título possui exatamente 8 caracteres


-- Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E
