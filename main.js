/* Работа с "большими данными"
В коде есть переменная data с объектом:


Необходимо вывести в консоль объект, в котором будут свойства:

name - имя пользователя, например "Иван". +
address - строка вида "Город, Улица", например "Москва, Красная площадь". +
friends - массив с именами всех друзей, например ["Мария", "Алексей"]. +
notifications - массив с уведомлениями, которые активны у пользователя, в порядке их упоминания, например ["email", "push"].
activityTypes - массив, с уникальными значениями всех типов активностей, в порядке их упоминания, без повторов, например ["workout", "reading"].
Примечание
В объекте должны все свойства располагаться (либо должны быть записаны) в том же порядке, который указан в задании.*/

const data = {
  user: {
    id: 1,
    name: "Иван",
    age: 30,
    email: "ivan@example.com",
    address: {
      street: "Красная площадь",
      city: "Москва",
      postalCode: "101000",
    },
    hobbies: ["фотография", "путешествия", "чтение"],
    friends: [
      {
        id: 2,
        name: "Мария",
        age: 28,
        interests: ["живопись", "фотография"],
      },
      {
        id: 3,
        name: "Алексей",
        age: 32,
        interests: ["спорт", "музыка", "путешествия"],
      },
    ],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "ru",
  },
  activities: [
    {
      type: "workout",
      date: "2023-10-01",
      duration: 60,
      details: {
        activityType: "бег",
        distance: 5,
      },
    },
    {
      type: "reading",
      date: "2023-10-02",
      duration: 90,
      details: {
        bookTitle: "Война и мир",
        pagesRead: 50,
      },
    },
  ],
};

const outputObject = {};
const arrFrnd = [];
const notificationsArr = [];
outputObject.name = data.user.name;
outputObject.address = data.user.address.city + ", " + data.user.address.street;
const arrFriends = data.user.friends;
for (let i = 0; i < arrFriends.length; i++) {
  arrFrnd.push(arrFriends[i].name);
}
outputObject.friends = arrFrnd;
let keysNotification = Object.keys(data.settings.notifications);
if (data.settings.notifications.email === true) {
  for (let i = 0; i < keysNotification.length; i++) {
    if (keysNotification[i] === "email") {
      notificationsArr.push(keysNotification[i])
    }
  }
} 
if (data.settings.notifications.sms === true) {
    for (let i = 0; i < keysNotification.length; i++) {
    if (keysNotification[i] === "sms") {
      notificationsArr.push(keysNotification[i])
    }
  }
}
if (data.settings.notifications.push === true) {
    for (let i = 0; i < keysNotification.length; i++) {
    if (keysNotification[i] === "push") {
      notificationsArr.push(keysNotification[i])
    }
  }
}
outputObject.notifications = notificationsArr;
const activitiesSe = data.activities;

function getUniqueTypes(activitiesSe) {
  const uniqueTypes = [];
  
  for (const activity of activitiesSe) {
    if (!uniqueTypes.includes(activity.type)) {
      uniqueTypes.push(activity.type);
    }
  }
  
  return uniqueTypes;
}
outputObject.activityTypes = getUniqueTypes(activitiesSe);
console.log(outputObject);























