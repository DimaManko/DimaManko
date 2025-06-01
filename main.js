/* Ваша задача — разработать объект character, который используется для создания игровых персонажей. Объект должен поддерживать методы с возможностью chaining, чтобы можно было вызывать их последовательно.

Персонаж должен обладать следующими характеристиками:

Имя (name) - имя персонажа.
Класс (class) — например, "Воин", "Маг", "Лучник".
Уровень (level) — начальное значение: 1.
Список навыков (skills) — изначально пустой массив.
Объект должен поддерживать следующие методы:

setName(name) — устанавливает имя персонажа.
setClass(className) — устанавливает класс персонажа.
addSkill(skill) — добавляет новый навык в массив навыков.
levelUp() — увеличивает уровень персонажа на 1.
getSummary() — возвращает строку с описанием персонажа, например: 
Имя: Артур, Класс: Маг, Уровень: 3, Навыки: Атака огнем и Ледяная стрела
Пример
const hero = character
  .setName("Химмель")
  .setClass("Воин")
  .addSkill("Уворот")
  .addSkill("Прямая атака")
  .addSkill("Геройская атака")
  .levelUp()
  .levelUp()
  .levelUp();

// Имя: Химмель, Класс: Воин, Уровень: 4, Навыки: Уворот, Прямая атака и Геройская атака
console.log(hero.getSummary());
Обратите внимание вывод навыков, вывод зависит от их количества.

Если навыков нет, то необходимо написать просто слово "нет".
Если навык один, то выводим его.
Если навыков несколько, тогда необходимо выводить их через запятую, кроме последнего навыка, перед ним ставим "и".
Подсказка
Для реализации цепочки методов, нужно возвращать сам объект this из каждого метода, за исключением тех, которые возвращают данные (getSummary).
Примечание
Ничего выводить не нужно, ваша задача - создать объект с правильными методами и свойствами. Проверка будет осуществляться автоматически.
Никаких проверок на ввод данных делать не нужно.*/


const character = {
  level: 1,
  skills: [],
  setName(name) {
    this.name = name
    return this;
  },
  setClass(className) {
    this.class = className
    return this;
  },
  addSkill(skill) {
    this.skills.push(skill);
    return this;
  },
  levelUp() {
    this.level += 1;
    return this;
  },
  getSummary() {
        const formatSkills = () => {
      if (this.skills.length === 0) return 'нет';
      if (this.skills.length === 1) return this.skills[0];
      if (this.skills.length === 2) return `${this.skills[0]} и ${this.skills[1]}`;
      
      const allExceptLast = this.skills.slice(0, -1).join(', ');
      const lastSkill = this.skills.at(-1);
      return `${allExceptLast} и ${lastSkill}`;
    };

    return `Имя: ${this.name}, Класс: ${this.class}, Уровень: ${this.level}, Навыки: ${formatSkills()}`;
  }
  }

const hero = character
  .setName("Химмель")
  .setClass("Воин")
  .addSkill("Уворот")
  .addSkill("Прямая атака")
  .addSkill("Геройская атака")
  .levelUp()
  .levelUp()
  .levelUp();
  console.log(character);
  console.log(hero.getSummary());
  




















