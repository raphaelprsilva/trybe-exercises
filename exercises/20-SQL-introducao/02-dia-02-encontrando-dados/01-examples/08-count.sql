-- Acesse a tabela sakila.staff

-- Quantas senhas temos cadastradas nessa tabela?
SELECT COUNT(password) AS `Senhas Cadastradas`
  FROM sakila.staff; -- 1

-- Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT COUNT(staff_id) AS `Employees`
  FROM sakila.staff;

-- Quantos emails temos cadastrados nessa tabela?
SELECT COUNT(email) AS `Emails Cadastrados`
  FROM sakila.staff;