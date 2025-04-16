/* Напишите программу, которая запрашивает у пользователя строку и затем выводит эту строку в обратном порядке и в нижнем регистре.
*/

let str = prompt("Введите строку");
let reversed = "";

for (let i = str.length -1; i >= 0; i--) {
    reversed += str[i];

}
console.log(reversed.toLocaleLowerCase())