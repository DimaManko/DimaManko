/* Превращаем массив в объект
Необходимо реализовать функцию transformArrToObject, которая из массива сделает объект.

Массив будет содержать элементы, в виде объектов, с названием свойства и значением.

Необходимо в функции создать один единый объект, со всеми указанными свойствами и значениями.

function transformArrToObject(arr) {
  // Ваш код здесь
}



console.log(transformArrToObject(arr)); // {name: 'Анатолий', age: 40}
Примечание
Задание необходимо выполнить самостоятельно, в своем проекте.
Проверить решение можно по видео в следующем шаге. */

const arr = [
  {name: 'name', value: 'Анатолий'}, 
  {name: 'age', value: 40},
];

function transformArrToObject(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]['name']] = arr[i]['value'];
  }
  return obj;
}
console.log(transformArrToObject(arr));
