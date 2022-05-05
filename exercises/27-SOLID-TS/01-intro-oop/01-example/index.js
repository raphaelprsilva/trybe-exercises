var Person = /** @class */ (function () {
    function Person(name, weight, age, height) {
        this.name = name;
        this._weight = weight;
        this._age = age;
        this.height = height;
    }
    Person.prototype.getWeight = function () {
        return this._weight;
    };
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
