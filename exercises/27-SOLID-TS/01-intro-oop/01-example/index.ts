class Person {
  name: string;
  private _weight: number; // Repare no underscore (_)
  private _age: number; // Repare no underscore (_)
  readonly height: number;

  constructor(name: string, weight: number, age: number, height: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

  getWeight(): number {
    return this._weight;
  }

  // Essa sintaxe pertmite acessar 'age' assim: 'person.age'
  get age(): number {
    return this._age;
  }
}

const person1 = new Person('Raphael', 75, 28, 1.71);

person1.height;
