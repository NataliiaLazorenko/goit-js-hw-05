/*
 * Перевикористання методів класу
 * Напиши клас StringBuilder. На вхід він отримує один параметр - рядок, який записує у властивість _value.

 * Додай класу наступний функціонал:
 * - Геттер value - повертає поточне значення поля _value
 * - Метод append(str) - отримує параметр str (рядок) і додає його в кінець _value
 * - Метод prepend(str) - отримує параметр str (рядок) і додає його на початок value
 * - Метод pad(str) - отримує параметр str (рядок) і додає його на початок і в кінець _value
 * Метод pad повинен використовувати методи append и prepend
*/

// Write code under this line

// варіант 1 (через function-constructor)
// const StringBuilder = function (str) {
//   this.value = str;
// };

// StringBuilder.prototype.getValue = function () {
//   return value;
// };

// StringBuilder.prototype.append = function (str) {
//   this.value += str;
// };

// StringBuilder.prototype.prepend = function (str) {
//   this.value = str + this.value;
// };

// StringBuilder.prototype.pad = function (str) {
//   this.append(str);
//   this.prepend(str);
// };

// варіант 2 (через class)
class StringBuilder {
  constructor(str) {
    this._value = str;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}

console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
