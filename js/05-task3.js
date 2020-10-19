/*
 * Використання методів класу
 * Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику
 * буде отримувати один аргумент - початковий масив товарів і записувати його у властивість items.

 * Додай методи класу:
 * getItems() - повертає масив поточних товарів
 * addItem(item) - отримує новий товар і додає його до поточних
 * removeItem(item) - отримує товар і, якщо він є, видаляє його із поточних
 */

// Write code under this line
const Storage = function (items) {
  this.items = items;
};

Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItem = function (item) {
  this.items.push(item);
};

Storage.prototype.removeItem = function (item) {
  for (const element of this.items) {
    if (element === item) {
      const indexOfElement = this.items.indexOf(item);
      this.items.splice(indexOfElement, 1);
    }
  }
};

console.log(typeof Storage);
// 'function'

const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */
