export enum Color {
  BLACK = 'black',
  WHITE = 'white',
  RED = 'red',
  SILVER = 'silver',
}

enum Door {
  TWO_DOORS = 'TWO DOORS',
  FOUR_DOORS = 'FOUR DOORS',
}

export enum Directions {
  LEFT = 'left',
  RIGHT = 'right',
}

export default class Car {
  brand: string;
  color: Color;
  doors: number;

  constructor(brand: string, color: Color, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('buzina!');
  }

  openTheDoor(doors: Door): void {
    console.log(`Abrindo a porta: ${doors}`);
  }

  closeTheDoor(doors: Door): void {
    console.log(`Fechando a porta: ${doors}`);
  }

  turnOn(): void {
    console.log('Turn on');
  }

  turnOff(): void {
    console.log('Turn off');
  }

  speedUp(): void {
    console.log('Acelera o carro');
  }

  speedDown(): void {
    console.log('Desacelera o carro');
  }

  turn(direction: Directions) {
    console.log(`Vira para o lado ${direction}`);
  }
}
