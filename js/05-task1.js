/*
 * function-constructor
 * Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login та email.
 *
 * В prototype функції-конструктора добав метод getInfo(), який повертає рядок зі значеннями властивостей
 * login та email об'єкта.
 */

// Write code under this line
const Account = function (login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  return `login: ${this.login}, email: ${this.email}`;
};

console.log(typeof Account.prototype.getInfo);
// 'function'

const mango = new Account('Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo());
// 'login: Mangozedog, email: mango@dog.woof'

const poly = new Account('Poly', 'poly@mail.com');
console.log(poly.getInfo());
// 'login: Poly, email: poly@mail.com'
