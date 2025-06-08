const favoriteBooks = [
  {
    id: 1,
    title: 'Head First JavaScript Programming',
    author: 'Eric Freeman',
    price: 29.99,
    genre: 'Programming',
  },
  {
    id: 2,
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    price: 39.99,
    genre: 'Programming',
  },
  {
    id: 3,
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    price: 49.99,
    genre: 'Programming',
  },
  {
    id: 4,
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 29.99,
    genre: 'Fantasy',
  },
  {
    id: 5,
    title: 'The Witcher',
    author: 'Andrzej Sapkowski',
    price: 19.99,
    genre: 'Fantasy',
  },
]

const names = ["John", "Alice", "James", "Julia"];
// Ваш код здесь
const lines = names.filter((name) => name.startsWith("J")).map(name => name.length)

const data = [-2, 4, -1, 5, 0];
// Ваш код здесь
const res = data.filter(data => data >=0).map(data => data * 2);

const fruits = ["apple", "kiwi", "banana", "pear"];
// Ваш код здесь
const result = fruits.filter(fruit => fruit.length > 3).map(fruit => fruit.toLocaleUpperCase());






/* Запросите у пользователя ввод названий столиц через пробел и поместите их в массив. Если массив содержит элемент "Андорра-Ла-Велла", выведите массив со столицами, которые заканчиваются на букву "а". Если не содержит - выведите массив со столицами, которые заканчиваются на букву "н".

Sample Input 1:

Пекин Берлин Бишкек Алжир Канберра Вашингтон Махачкала
Sample Output 1:

[ 'Пекин', 'Берлин', 'Вашингтон' ] 
Sample Input 2:

Пекин Берлин Якутск Алжир Андорра-Ла-Велла Вашингтон Махачкала
Sample Output 2:

[ 'Андорра-Ла-Велла', 'Махачкала' ]
 */


let prom = prompt("Введите название столиц через пробел");
let arr = prom.split(" ");
if (arr.includes("Андорра-Ла-Велла")) {
  let arrA = arr.filter(elem => elem.endsWith('а'));
} else {
  let arrN = arr.filter(elem => elem.endsWith('н'));
} 






/* Запросите у пользователя строковые значения через пробел и поместите их в массив. Используя метод map, создайте новый массив, который будет содержать эти значения, написанные заглавными буквами.

Sample Input 1:

do a barrel roll
Sample Output 1:

[ 'DO', 'A', 'BARREL', 'ROLL' ]
Sample Input 2:

смотреть онлайн бесплатно
Sample Output 2:

[ 'СМОТРЕТЬ', 'ОНЛАЙН', 'БЕСПЛАТНО' ]
Sample Input 3:

молоко сахар бетон бабушка
Sample Output 3:

[ 'МОЛОКО', 'САХАР', 'БЕТОН', 'БАБУШКА' ] */

let promp = prompt("Print number with b");
let array = promp.split(" ");
let newArray = array.map(elem => elem.toLocaleUpperCase());
console.log(newArray);



