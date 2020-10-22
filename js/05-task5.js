/*
 * Клас
 * Напиши клас Car із вказаними властивостями і методами.
 */

class Car {
  // Write code under this line
  /*
   * Додай `статичний` метод `getSpecs(car)`, який приймає об'єкт-машину як параметр і повертає
   * шаблонний рядок з властивостями і значеннями об'єкта.
   * Властивості: maxSpeed, speed, isOn, distance, price
   * Приклад рядка, отриманого цим методом: 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   */
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
  }

  /*
   * Конструктор отримує об'єкт налаштувань. Додай властивості майбутнього екземпляра класу:
   *  speed - поточна швидкість, початкове значення `0`
   *  price - ціна автомобіля
   *  maxSpeed - максимальна швидкість
   *  isOn - чи заведений автомобіль. Значення `true` або `false`, початкове значення false
   *  distance - пробіг в кілометрах, початкове значення `0`
   */
  constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  /*
   * Додай геттер і сеттер для властивості `price`, який буде працювати з властивістю ціни автомобіля.
   * ВАЖЛИВО: для запису методів get и set значення параметра записують з підкресленням.
   * Див. нижче приклад 1.
   */
  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  /*
   * Метод, який заводить автомобіль. Записує у властивість `isOn` значення `true`
   */
  turnOn() {
    this.isOn = true;
  }

  /*
   * Метод, щоб заглушити автомобіль. Цей метод повинен записувати у властивість isOn значення false
   * і скидувати поточну швидкість до 0
   */
  turnOff() {
    if (this.isOn) {
      this.isOn = false;
      this.speed = 0;
    }
  }

  /*
   * Цей метод повинен додавати до властивості `speed` отримане значення, при умові, що результуюча
   * швидкість не більша, ніж значення властивості `maxSpeed`
   */
  accelerate(value) {
    const newSpeed = this.speed + value;
    if (newSpeed <= this.maxSpeed) {
      this.speed = newSpeed;
    } else {
      this.speed = this.maxSpeed;
    }
  }

  /*
   * Цей метод повинен віднімати від властивості `speed` отримане значення, при умові, що результуюча
   * швидкість не менша 0
   */
  decelerate(value) {
    const newSpeed = this.speed - value;
    if (newSpeed >= 0) {
      this.speed = newSpeed;
    } else {
      this.speed = 0;
    }
  }

  /*
   * Цей метод повинен додавати до властивості `distance` пробіг в кілометрах, тобто hours * speed,
   * але тільки в тому випадку, ящко машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang);
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

// ======================================================================================================
// #### Приклад 1.
//```js
// class Guest {

//   // Власні властивості класу розміщуємо в конструкторі
//   constructor(name, roomNumber) {

//     /* параметр name не повинен співпадати з назвою властивості, але повинен бути подібним. Тому
//     * використовують прийом зміни назви, додаючи символ '_'. Хоча це може бути будь-який інший символ
//     */
//     this._name = name;
//   }

//   // Використовуємо геттери і сеттери для опису інтерфейсу доступу до властивостей
//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }
