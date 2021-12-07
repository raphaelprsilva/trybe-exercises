-- Faça uma query na tabela akila.actor, de maneira que mostre os primeiros nomes e últimos nomes únicos.
SELECT
  DISTINCT first_name, last_name
  FROM sakila.actor;

-- Faça uma query na tabela akila.actor, de maneira que mostre os primeiros nomes únicos.
SELECT
  DISTINCT first_name
  FROM sakila.actor;