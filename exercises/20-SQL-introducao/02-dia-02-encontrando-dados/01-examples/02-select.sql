-- Monte uma query que exiba seu nome na tela
SELECT 'Raphael' AS name;

-- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela
SELECT
  'Raphael' AS nome,
  'Silva' AS sobrenome,
  'Uberlândia' AS cidade_natal,
  28 AS idade;

-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português)
-- FEITO!

-- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT
SELECT 13 * 8 AS resultado;

-- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual"
SELECT now() AS `Data Atual`;