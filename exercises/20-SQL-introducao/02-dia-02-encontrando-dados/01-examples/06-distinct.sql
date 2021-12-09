-- No banco de dados Escola, na tabela 'Alunos', faça:

-- Monte uma query para encontrar pares únicos de nomes e idades
SELECT
  DISTINCT Nome, Idade
  FROM Escola.Alunos;

-- Quantas linhas você encontraria na query anterior?
-- O mesmo número de linhas de uma query "normal"

-- Monte uma query para encontrar somente os nomes únicos.
SELECT
  DISTINCT Nome,
  FROM Escola.Alunos;

-- Quantas linhas você encontraria na query anterior?
-- 4 linhas

-- Monte uma query para encontrar somente as idades únicas
SELECT
  DISTINCT Idade
  FROM Escola.Alunos;

-- Quantas linhas você encontraria na query anterior?
-- 4 linhas
