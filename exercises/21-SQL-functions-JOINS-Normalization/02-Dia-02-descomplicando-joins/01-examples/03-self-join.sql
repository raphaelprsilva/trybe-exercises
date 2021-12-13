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
SELECT CONCAT(MANAGER.first_name, ' ', MANAGER.last_name) AS manager, COUNT(*)
FROM hr.employees AS MANAGER
INNER JOIN hr.employees AS EMPLOYEE
ON EMPLOYEE.MANAGER_ID = MANAGER.MANAGER_ID
GROUP BY MANAGER.EMPLOYEE_ID;
