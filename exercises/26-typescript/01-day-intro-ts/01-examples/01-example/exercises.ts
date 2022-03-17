export function greeter(name: string) {
  return `Olá ${name}`;
}

export function personAge(name: string, age: number) {
  return `Olá ${name}. Sua idade é ${age}`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function losangle(biggerDiagonal: number, lowerDiagonal: number): number {
  return (biggerDiagonal * lowerDiagonal) / 2;
}

export function trapezius(biggerBase: number, lowerBase: number, height: number): number {
  return ((biggerBase + lowerBase) * height) / 2;
}

export function circle(radius: number): number {
  return Math.PI * (radius ** 2);
}

export function gritar(value: string|number|boolean) {
  if (typeof value === 'string')
    return value.toUpperCase();
  if (typeof value === 'number')
    return value.toString().toUpperCase();
}

export const test = (myParam: number):number => {
  return myParam;
}