/* Реализуйте функцию analyzeArtifacts(artifacts), которая будет анализировать коллекцию космических артефактов и выводить результаты. Каждый артефакт передается в виде объекта с уникальным идентификатором, типом, годом создания и количеством показов. Ваша функция должна:

Вывести список всех артефактов в формате:
Артефакт [ИД]: Тип - [Тип], Год - [Год], Показы - [Количество показов]
Найти артефакты с наибольшим количеством показов и вывести их информацию.
Подсчитать, сколько артефактов каждого типа хранится в музее и вывести результат.
Между каждым заданием, в выводе, должна быть пустая строка.

Пример объекта с данными
const artifacts = {
  A101: { type: "метеорит", year: 1890, exhibits: 15 },
  A102: { type: "луноход", year: 1973, exhibits: 20 },
  A103: { type: "скафандр", year: 1969, exhibits: 12 },
  A104: { type: "спутник", year: 1957, exhibits: 20 },
  A105: { type: "луноход", year: 1971, exhibits: 10 },
};

Пример вызова функции
analyzeArtifacts(testArtifacts);
Пример вывода
Артефакт A101: Тип - метеорит, Год - 1890, Показы - 15
Артефакт A102: Тип - луноход, Год - 1973, Показы - 20
Артефакт A103: Тип - скафандр, Год - 1969, Показы - 12
Артефакт A104: Тип - спутник, Год - 1957, Показы - 20
Артефакт A105: Тип - луноход, Год - 1971, Показы - 10

Артефакты с наибольшим количеством показов (количество показов 20):
A102: Тип - луноход, Год - 1973
A104: Тип - спутник, Год - 1957

Количество артефактов по типу:
метеорит: 1
луноход: 2
скафандр: 1
спутник: 1
Примечание
Используйте цикл for...in для перебора объектов.
Обратите внимание на формат вывода: между заданиями должна быть пустая строка. */

function analyzeArtifacts(artifacts) {
  let maxView = -Infinity;
  for (const key in artifacts) {
    console.log(`Артефакт ${key}: Тип - ${artifacts[key].type}, Год - ${artifacts[key].year}, Показы - ${artifacts[key].exhibits}`);
    let exhibitsValue = artifacts[key].exhibits;
    if (maxView < exhibitsValue) {
      maxView = exhibitsValue;
    }
  }
  console.log();
  console.log(`Артефакты с наибольшим количеством показов (количество показов ${maxView}):`);
  for (const key in artifacts) {
    if (artifacts[key].exhibits === maxView) {
      const artifact = artifacts[key];
      console.log(`${key}: Тип - ${artifact.type}, Год - ${artifact.year}`);
    }
  }
  console.log();
  const typeCounts = {};

for (const key in artifacts) {
  const type = artifacts[key].type;
  if (typeCounts[type]) {
    typeCounts[type]++;
  } else {
    typeCounts[type] = 1;
  }
}

console.log("Количество артефактов по типу:");
for (const type in typeCounts) {
  console.log(`${type}: ${typeCounts[type]}`);
}
}

const artifacts = {
  A101: { type: "метеорит", year: 1890, exhibits: 15 },
  A102: { type: "луноход", year: 1973, exhibits: 20 },
  A103: { type: "скафандр", year: 1969, exhibits: 12 },
  A104: { type: "спутник", year: 1957, exhibits: 20 },
  A105: { type: "луноход", year: 1971, exhibits: 10 },
};

analyzeArtifacts(artifacts);