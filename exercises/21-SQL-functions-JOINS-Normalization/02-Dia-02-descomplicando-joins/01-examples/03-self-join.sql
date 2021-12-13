-- 1. Queremos saber o Nome das pessoas colaboradoras e suas respectivas
-- gerências ( `manager` ) cujos departamentos ( `department` ) são diferentes.
SELECT
		CONCAT(EMP.first_name, ' ', EMP.last_name) AS employee,
		CONCAT(MAN.first_name, ' ', MAN.last_name) AS manager
FROM hr.employees AS EMP
INNER JOIN hr.employees AS MAN
ON EMP.employee_id = MAN.manager_id
WHERE EMP.department_id <> MAN.department_id;

-- 2. Exiba o Nome e a quantidade de pessoas lideradas de cada gerente.

