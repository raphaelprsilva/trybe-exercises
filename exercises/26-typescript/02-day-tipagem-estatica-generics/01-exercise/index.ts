// import Car, { Color, Directions } from './exercise-01';

// const car = new Car('Volksvagen', Color.SILVER, 4);

// car.turnOn();
// car.turn(Directions.LEFT);

type callBackFn<T> = (value: T, index?: number, array?: Array<T>) => boolean;

export function myFilter<T>(array: T[], callback: callBackFn<T>): Array<T> {
  let filterdArray: Array<T> = [];

  for (let index = 0; index < array.length; index = index + 1) {
    if (callback(array[index], index, array)) {
      filterdArray.push(array[index]);
    }
  }
  return filterdArray;
}

const result = myFilter<number>([1, 2, 3, 4, 5], (value) => value < 2);

console.log(result);
