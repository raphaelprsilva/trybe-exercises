-- Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
SELECT 'This is SQL Exercise, Practice and Solution';

-- Escreva uma query para exibir três números em três colunas.
SELECT 1 AS num1, 2 AS num2, 3 AS num3;

-- Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 10 + 15 AS 'soma de 10 + 15';

-- Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT 10 * 34 AS `Multiplicação de 10 * 34`;

-- Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT * FROM Scientists.Scientists;

-- Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
SELECT 
    Name, Hours AS `Tempo de Trabalho`
FROM
    Scientists.Projects;

-- Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT 
    Name
FROM
    Scientists.Scientists
ORDER BY Name;

-- Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
SELECT 
    Name
FROM
    Scientists.Projects
ORDER BY Name DESC;

-- Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
SELECT 
    CONCAT('O Projeto ',
            Name,
            ' precisou de ',
            Hours,
            ' para ser concluído.')
	AS 'Horas gastas do Projeto'
FROM
    Scientists.Projects;

-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT 
    Name, Hours
FROM
    Scientists.Projects
ORDER BY Hours DESC
LIMIT 3;

-- Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT DISTINCT
    (Project)
FROM
    Scientists.AssignedTo;

-- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.

-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.

-- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

-- Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.

