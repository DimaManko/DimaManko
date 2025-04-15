/* Перед вами программа, которая принимает название товара, цену товара за штуку и количество товара и выводит сообщение в определенном формате с помощью функции calculateTotal с тремя параметрами. Напишите функцию calculateTotal. Используйте интерполяцию.

Sample Input 1:

Майка
300
6
Sample Output 1:

Вы выбрали 6 товаров "Майка" по цене 300 рублей за штуку. Итого: 1800 рублей. */

let name = prompt("Введите название товара");
let coast = +prompt("Введите цену товара за 1 шт");
let calculate = +prompt("Введите количество товара");

function calculateTotal(name, coast, calculate) {
    let output = `Вы выбрали ${calculate} товаров "${name}" по цене ${coast} рублей за штуку. Итого: ${coast * calculate} рублей.`
    return output;
}

console.log(calculateTotal(name, coast, calculate));


const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());

...

const message = calculateTotal(itemName, itemPrice, quantity);
console.log(message);