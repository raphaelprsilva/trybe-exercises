let salarioBruto = 4500;
let salarioLiquidoInss;
let salarioLiquidoIr;

if (salarioBruto < 1556.94) {
  salarioLiquidoInss = 0.92 * salarioBruto;
  console.log(salarioLiquidoInss);
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  salarioLiquidoInss = 0.91 * salarioBruto;
  console.log(salarioLiquidoInss);
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  salarioLiquidoInss = 0.89 * salarioBruto;
  console.log(salarioLiquidoInss);
} else {
  salarioLiquidoInss = salarioBruto - 570.88;
  console.log(salarioLiquidoInss);
}

if (salarioLiquidoInss < 1903.98) {
  console.log('Isneto do IR');
} else if (salarioLiquidoInss > 1903.98 && salarioLiquidoInss <= 2826.65) {
  salarioLiquidoIr = salarioLiquidoInss - (0.075 * salarioLiquidoInss - 142.8);
  console.log(salarioLiquidoIr);
} else if (salarioLiquidoInss > 2826.65 && salarioLiquidoInss <= 3751.05) {
  salarioLiquidoIr = salarioLiquidoInss - (0.15 * salarioLiquidoInss - 354.8);
  console.log(salarioLiquidoIr);
} else if (salarioLiquidoInss > 3751.05 && salarioLiquidoInss <= 4664.68) {
  salarioLiquidoIr = salarioLiquidoInss - (0.225 * salarioLiquidoInss - 636.13);
  console.log(salarioLiquidoIr);
} else {
  salarioLiquidoIr = salarioLiquidoInss - (0.275 * salarioLiquidoInss - 869.36);
  console.log(salarioLiquidoIr);
}