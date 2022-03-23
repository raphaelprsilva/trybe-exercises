import Car, { Color, Directions } from './exercise-01';

const car = new Car('Volksvagen', Color.SILVER, 4);

car.turnOn();
car.turn(Directions.LEFT);
