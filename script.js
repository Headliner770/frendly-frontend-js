// const name = "Pavel";

// const lostname = "Alizar";

// const year = "35";

// const message = name + lostname;

// const message2 = `${name} ${lostname}! `;

// console.log(name, lostname);
// console.log(message);
// console.log(message2);

// const year = 2025;
// const message =
//   year === 2025 ? "Начинаю учиться!" : year === 3000 ? "neirosety" : "xz year";

// console.log(message);

// false || false; // false
// true || false; // true
// false || true; // true
// true || true; // true

// const age = 15;
// const withParent = false;
// if (age > 18 || withParent) {
//   console.log("Проходите");
// } else {
//   console.log("Несовершеннолетним вход закрыт");
// }

// const result = "" || false || null || undefined || 0 || "Привет" || "Пока"; //Выводи первое true
// console.log(result);

// false && false; // false
// true && false; // false
// false && true; // false
// true && true; // true

// const moneyInWallet = 5;
// const iceCreamPrice = 2;
// const isStoreOpen = false;

// if (iceCreamPrice < moneyInWallet && isStoreOpen) {
//   console.log("Вот ваше мороженое!");
// } else {
//   console.log("Магазин закрыт");
// }

// const result = "Привет" && true && 5 && null && 10; //выводит первое false

// console.log(result);

// const age = 30;
// const isYoung = age < 18;

// if (isYoung) {
//   console.log("Покажите паспорт");
// }

// const name = "Максим";
// const age = 16;
// const hasMuchMoney = true;
// const hasGoodJob = true;
// const hasMotivation = false;
// const hasFreeTime = false;

// if (name !== "Максим") {
//   console.log("Вы не Максим, поховите Максима");
// } else if (age < 16) {
//   console.log("Еще рано");
//   // Опер && вып первый. у  && приоритет выше чем у ||
// } else if (!hasMuchMoney || !hasGoodJob || (hasMotivation && hasFreeTime)) {
//   console.log("Максиму нужно учить фронтенд");
// } else {
//   console.log("1111");
// }

// const a = null;
// const b = 100;

// const result1 = a || b; // приводит к boolean и вернет первое true или последнее если все false
// const result2 = a ?? b; // если первый операнд null / undef, то вернет выражение b
// console.log(result1);

// 6
// const age = +prompt("Сколько тебе лет ?");

// switch (true) {
//   case age < 1: {
//     console.log("Такого возраста не бывает!");
//     break;
//   }
//   case age === 18: {
//     console.log("Не верю, покажи паспорт");
//     break;
//   }
//   case age > 0 && age <= 125: {
//     console.log(`Твой возраст: ${age}`);
//     break;
//   }
//   case age > 125: {
//     console.log("Вампир что ли ?");
//     break;
//   }
//   default: {
//     console.log("Возраст введен некорректно");
//   }
// }

// 7  Циклы

// let count = 0;

// do {
//   console.log(count);
//   count++;
// } while (count < 10);

// for (let i = 0; i < 4; i++) {
//   alert(i);
// }
// console.log("...цикл завершен");

//  8  Функции

// const numberFromString = Number("100"); //преобр из string в number
// const stringFromNumber = String(10);  //преобр из number в string
// const booleanFromNull = Boolean(null); //преобр к boolean

// alert("Hi all");
// confirm("Подтверждение действия");

// const answer = prompt("Введите ответ");

//function declaration
// function logHello() {
//   console.log("Hi");
// }
// logHello();
// logHello();

// const message = 'Global privet'

// function logMessage() {
//   const message = 'Local privet'
//   console.log(message)
// }
// logMessage()
// console.log(message)  //выведит сначала локал, потом глобал

// function logMessage() {
//   const message = "Hi";
//   console.log(message);
// }
// logMessage();
// console.log(`${message}, frend`);

// function logMessage(message, count) {
//   // принимаем данные в скобках (ПАРАМЕТРЫ) (message, count)
//   for (let i = 0; i < count; i++) {
//     console.log(message);
//   }
// }

// logMessage("Hi!", 5); //при вызове в скобках (АРГУМЕНТЫ)
// logMessage("By!", 2);

// const globalMessage = "Привет";

// function logMessage(message = 'Yo', count = 5) {
//   const messageFormatted = `(((${message})))`;

//   for (let i = 0; i < count; i++) {
//     console.log(messageFormatted);
//   }
// }
// logMessage();
// console.log(globalMessage)

// function sumFiveNumbers(num5, num1 = 100, num2 = 200, num3 = 300, num4 = 400) {
//   const sum = num1 + num2 + num3 + num4 + num5;

//   console.log(`Сумма чисел равно ${sum}`);
// }

// sumFiveNumbers(1, 1, 1);

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 9));

// function getAgeType(age) {
//   if (typeof age !== 'number') {
//     return 'Некорректно'
//   }

//   if (age < 1 || age > 125) {
//     return "Не может быть"
//   }

//   if (age < 18) {
//     return "Несовершеннолетний"
//   }

//   return 'Взрослый'
// }

// console.log(getAgeType(56))

// function get(name) {
//   if (!name) return;
//   return `знаю, ты ${name}`;
// }

// console.log(get());

//  9 Виды функций

// Особ-сть fun decloration : ёё можно использовать до её объявления!!!
// console.log(sum(6, 3)); //Хойстинг

// function sum(a, b) {
//   return a + b;
// }

// Особ-сть fun decloration : её можно перезаписать, но где бы её не вызвали, код из тела ф-ии будет выполняться из той, которая написана !!!последней!!!
// logMessage();
// function logMessage() {
//   console.log("Привет!");
// }

// fun logMessage() {
//   console.log("Пока!");
// }

// fun expression
// fun expression НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ ДО ЕЁ ОБЪЯВЛЕНИЯ, как в примере c fun decloration !!!
// const logHello = function () {
//   console.log("Hello!");
// };
// // fun expression НЕЛЬЗЯ ПЕРЕОПРИДЕЛИТЬ (если она объявлена через const), как в примере c fun decloration !!!

// logHello();

// Arrow fun
// Arrow fun НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ ДО ЕЁ ОБЪЯВЛЕНИЯ, так же как и с fun expression
// У Arrow fun нет своего контекста. Ключ слово this покажет на родительскую обл видимости
// const logHello = () => {
//   console.log("Hello!");
// };
// logHello();

// const sum = (a, b) => a + b; //Особеность: return можно не указывать. Если возможно указать тело ф-ии в одну троку, то {} не обязательны

// console.log(sum(1, 2));

// function fn1() {
//   return "I'm function1"
// }

// const fn2 = function() {
//   return "I'm function2"
// }

// const fn3 = () => {
//   return "I'm function3"
// }
// console.log(fn1())
// console.log(fn2())
// console.log(fn3())// Функция всегда вызывается с круглыми скобками, даже если аргументы не передаются

// const fn1 = () => {
//   return "Im function1";
// };

// const fn2 = fn1;  //Уже объявленную ранее переменную, можем присвоить в другую переменную
// console.log(fn2());

// const logMessage = (actionBefore, actionAfter) => {
//   actionBefore();
//   console.log("Hello!");
//   actionAfter();
// };
// const fn1 = () => console.log("before");
// const fn2 = () => console.log("after");

// logMessage(
//   () => console.log("before"),
//   () => console.log("after")
// );

// const validate = (hasAccess) =>
//   hasAccess ? () => console.log("go") : () => console.log("stop"); // логика с тернарными оператарами '?' и ':' вместо 'if' и 'else'

// const logMessage = validate(true);
// logMessage();

// const showMenu = () => {
//   document.querySelector(".menu").classList.add("is-active");
// };
// document.querySelector(".button").addEventListener("click", () => {
//   showMenu();
// });
// // Функция должна выполнять одно действие, логичное от её названия

// 10 Объекты

// const firstEmptyObject = {}; // Пустой объект
// const secondEmptyObject = new Object(); // То же пустой объект

// const user = {
//   login: "iamsuper", // Наботр свойств или набор пар ключ - значение (в {})
//   password: "qwerty",
// };
// console.log(user.login) или (user['login']) // Получаем доступ к свойству

// const user = {
//   login: "iamsuper", // Наботр свойств или набор пар ключ - значение (в {})
//   password: "qwerty",
//   adress: {
//     city: "Moscow",
//   },
//   sayHi: () => console.log("Hello!"), // функция внутри объекта это !!! МЕТОД !!!
// };
// console.log(user["login"]);
// user.sayHi(); // вызвали Метод sayHi внутри объекта user

// Манипулировать свойствами внутри константного объекта МОЖНО, но полностью переопределить переменную НЕЛЬЗЯ
// const user = {};

// user.name = "Pavel"; // Добавили в пустой объект поле name со значением Pavel
// user["is deeloper"] = true;

// console.log(user);

// user.name = "Максим"; // Измениили значение поля name на Максим
// user.age = 35;
// delete user.name; // Удаляем свойство

// console.log(user);

// Создали объект user из двух переменных
// const name = "Pavel";
// const age = 35;

// const user = {
//   name: name,
//   age,
// };
// console.log(user);

// const obj = {
//   123: "Example",
// };
// console.log(obj["123"]);

// можно использовать нэйминг для ключа даже такой
// const obj = {
//   const: "blabla",
//   let: "bla",
//   for: "xz",
// };
// console.log(obj);

// const propName = prompt("Какое совйство?");
// const propValue = prompt("Какое значение ${propName}?");

// const obj = {
//   [propName]: propValue,
// };
// console.log(obj);

// Проверку соществования свойства в объекте
// const user = {
//   name: "PAvel",
//   age: 35,
// };
// console.log("isDeveloper" in user);

// Способ перебора свойств объект через цикл  !!! for in !!!
// const user = {
//   name: "Pavel",
//   age: 35,
//   isDeveloper: true,
// };
// for (const propName in user) {
//   console.log(user[propName]);
// }

// const nums = {
//   2: "Two",
//   1: "One",
//   3: "Tree",
// };
// for (const num in nums) {
//   console.log(nums[num]); // При выводе js сортирует порядок
// }

// 11 Объекты - сравнение, копирование, объединение, деструктуризация, остаточные пар-ры

// JS хранит объекты по ссылке в обл памите
// const obj1 = { age: 10 };
// // const obj2 = { age: 10 };
// // console.log(obj1 === obj2); //false
// console.log(obj1);

// const obj1 = { name: "Pavel" };
// const obj2 = obj1; //obj1 и obj2 будут ссылаться на одну обл в памяти

// obj2.name = "Max";

// console.log(obj1 === obj2); //true
// console.log(obj1); // name: 'Max'
// console.log(obj2); // name: 'Max'

// const obj1 = {
//   name: "Pavel",
//   age: 35,
// };
// const obj2 = {
//   name: "Pavel",
//   age: 35,
// };
// const areObjectsEqual = (object1, object2) => {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);

//   console.log("Длина keys1:", keys1.length);
//   console.log("Длина keys2:", keys2.length);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (const key in object1) {
//     const value1 = object1[key];
//     const value2 = object2[key];
//     const areValueObjects =
//       typeof value1 === "object" && typeof value2 === "object";

//     if (areValueObjects) {
//       return areObjectsEqual(value1, value2); // Рекурсия - когда ф-ия areObjectsEqual внутри использ саму себя
//     }

//     if (value1 !== value2) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(areObjectsEqual(obj1, obj2)); //true

// const obj1 = { name: "Pavel" };
// const obj2 = { ...obj1 }; // Копировали с помощью спрэт оператора

// for (const key in obj1) {
//   obj2[key] = obj1[key];
// }
// obj2.name = "Max";
// console.log("obj1:", obj1);
// console.log("obj2:", obj2);

// const obj1 = { name: "Pavel" };
// const obj2 = { age: 35 };
// const obj3 = {
//   name: "Max",
//   isDeveloper: true,
// };

// const user = { ...obj1, ...obj2, ...obj3 }; // Создали новый объект с объедененными значениями имеющихся объектов
// console.log("user:", user); //{name: 'Max', age: 35, isDeveloper: true} (значение name будет взято последнее)

// const user = {
//   name: "Pavel",
//   age: 28,
//   // address: {
//   //   city: "Moskow",
//   //   code: 234,
//   // },
// };
// // console.log(user.address.city); //Будет ошибка
// console.log("текст"); //Последующий код не вполнится из-за ошибки
// console.log(user.address?.city); //Использ спрэт оператор ?. Тогда последующий код выполнится

// const guest1 = {
//   name: "Vasya",
//   age: 30,
//   orderInfo: {
//     roomType: 2,
//     stayDates: {
//       from: "14.04.2024",
//       to: "21.04.2024",
//     },
//   },
// };
// const guest2 = {
//   name: "Katya",
//   age: 33,
// };
// const logGuestInfo = (guest) => {
//   console.log(`
//     Имя: ${guest.name}
//     Возраст: ${guest.age}
//     Дата выезда: ${guest.orderInfo?.stayDates?.to ?? "Не указана"}
// `); //Проверка наличия
// };
// logGuestInfo(guest1);
// logGuestInfo(guest2);

//Синтаксис диструктурирующего присваивания
// const user = {
//   name: "Pavel",
//   age: 35,
//   isDeveloper: true,
// };
// const { name, age, isDeveloper } = user;
// console.log("name:", name);
// console.log("age:", age);
// console.log("isDeveloper:", isDeveloper);

// const logAdress = ({ city, street, houseNumber, apartamentNumber }) => {
//   console.log(`
//     Адрес:
//     г. ${city}, ул. ${street},
//     д. ${houseNumber}, кв. ${apartamentNumber},
//   `);
// };
// logAdress({
//   city: "Moskow",
//   street: "Pushkina",
//   houseNumber: 21,
//   apartamentNumber: 11,
// });

//деструктуризация с переименованием
// const user = {
//   name: "Pavel",
// };
// const admin = {
//   name: "Boss",
// };
// const { name: userName } = user;
// const { name: adminName } = admin;
// console.log("userName:", userName);
// console.log("adminName:", adminName);

// const user1 = {
//   name: "Pavel",
//   age: 35,
//   city: "Moskow",
// };
// const user2 = {
//   name: "Max",
//   age: 20,
// };
// const { city = "Не указан" } = user1;
// console.log("Город: ", city);

// //Деструктуризация с переимен и значением по умолчанию
// const user = {
//   // city: "Moskow",
// };
// const { city: userCity = "не указано" } = user;
// console.log("userCity:", userCity);

//Остаточные или rest-параметры
//Очень часто применяется в React!!!!!!!!!!!!!!!!!!!!!!
// const logUser = (user) => {
//   const { name, age, city, ...otherInfo } = user; //otherInfo будет отвечать за остаточные параметры

//   console.log(`
//   Имя: ${name}
//   Возраст: ${age}
//   Город: ${city}`);
//   console.log("Доп информация:", otherInfo);
// };
// logUser({
//   name: "Pavel",
//   age: 35,
//   city: "Moskow",
//   company: "VK",
//   jobPost: "Frontend Developer",
//   hasCat: true,
// });

// // 12 this в методах объекта
// console.log("this глобальный:", this);
// function fn() {
//   console.log("this в теле функции:", this);
// }
// fn(); //this будет ссылаться на один и тот де объект - window

// const user = {
//   name: "Pavel",
//   age: 28,
//   logThis() { //если использ стрелочную ф-ию, то this будет ссылаться на window(глобал) !!!!!!
//     console.log("this в теле метода объекта user:", this);
//     // console.log("this.name:", this.name);
//   },
//   address: {
//     city: "Moskow",
//     code: 12344,
//     logInnerThis: function () {
//       console.log("this в теле метода объекта address:", this);
//     },
//   },
// };
// user.logThis();
// user.address.logInnerThis();

// const user1 = { name: "Alex" };
// const user2 = { name: "Bers" };
// function logInfo() {
//   console.log("this:", this); // Глобальный контекст
//   console.log("this.name:", this.name); //
// }
// logInfo();
// user1.logName = logInfo;
// user2.logName = logInfo;
// user1.logName(); // this.name: Alex
// user2.logName(); // this.name: Bers
// // Получим в this зависит к какому контексту this пренадлежит.
// // Если в fun decloration, то получим ссылку на сам объект, которому метод пренадлежит  !!!!!!
// // Если метод объявлен через стрел ф-ию иил обращение к this идет вне метода объекта, то получим глобал контекст выполнения !!!!!!!!

//задача с lernjs
// const calculator = {
//   read() {
//     this.a = Number(prompt("Enter first number:", 0));
//     this.b = Number(prompt("Enter second number:", 0));
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };
// calculator.read();
// console.log("calculator:", calculator);
// console.log("Сумма:", calculator.sum());
// console.log("Произведение:", calculator.mul());

//задача с lernjs
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     // показывает текущую ступеньку
//     console.log("Текущая ступенька:", this.step);
//     return this;
//   },
// };
// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0 //Вызов через точку - чейнинг(цепь)

// // 13 Методы примитивов. Числа. Объект math. Округление. Парсинг чисел и строк
// // Примитивные типы данных:
// const name = "Pavel"; //string
// const age = 35; //number
// const universeStars = 999999999999999999999n; //BigInt
// const isDeveloper = true; //Boolean
// const id = Symbol(); //symbol
// const dog = null; //null
// const future = undefined; //undefiend

// // Непримитивный тип данных:
// const user = {} // Объект

// В объектах находятся свойства. Некоторые свойства содержат функции (методы). Методы могут ывп любую логику
// const user = {
//   name: "Alex",
//   age: 30,
//   logInfo() {
//     console.log(`
//       Имя: ${this.name}
//       Возраст: ${this.age}
//       `);
//   },
//   getIsAdult() {
//     return this.age >= 18;
//   },
// };
// user.logInfo(); //Обращение к методу
// console.log("Взрослый?", user.getIsAdult());

// Округление
// const price = 99.99;
// const roundedPrice = price.toFixed(0);
// console.log(`Округленная цена:`, roundedPrice);

// const price = 99.555;
// console.log("Округление до 0 знаков после запятой:", price.toFixed());
// console.log("Округление до 1 знаков после запятой:", price.toFixed(1));
// console.log("Округление до 2 знаков после запятой:", price.toFixed(2));

// Округление идет от самого первого числа
// const num = 100.055;
// console.log(num.toPrecision(5));

// const num = 100;
// const numAsString = num.toString();
// console.log("Число:", num); // выводит число 100
// console.log("Число в виде строки:", numAsString); // выводит строку 100

// const num = 100;
// console.log(`Число ${num} в двоичной системе счисления:`, num.toString(2));

// console.log(Math);

// console.log("Случайное число:", Math.random());

//Отбрасывает минус
// console.log(Math.abs(-1));
// console.log(Math.abs(2));
// console.log(Math.abs(-1234));

// console.log(Math.pow(2, 10)); //возводит в степень
// console.log(2 ** 10); //так же возводит в степень

// console.log(Math.sqrt(16)) //квадратный корень
// console.log(Math.sqrt(100)) //квадратный корень
// console.log(Math.cbrt(1000)) //кубический корень
// console.log(Math.cbrt(100)) //кубический корень

// console.log(Math.min(1, 2, 3, -5, 112, 99)); // Возвращает минимальное число
// console.log(Math.max(1, 2, 3, -5, 112, 99)); // Возвращает максимальное число
// Тот же пример, но с массивом :
// const nums = [1, 2, 3, -5, 112, 99];
// // console.log(Math.min(...nums));

// // метод round округляет до ближайшего целого
// console.log(Math.round(3.49)); // 3
// console.log(Math.round(3.5)); // 4
// console.log(Math.round(3.51)); // 4
// console.log(Math.round(-3.49)); // -3
// console.log(Math.round(-3.5)); // -3
// console.log(Math.round(-3.51)); // -4

// // метод floor округляет вниз до ближайшего целого
// console.log(Math.floor(3.49)); // 3
// console.log(Math.floor(3.5)); // 3
// console.log(Math.floor(3.51)); // 3
// console.log(Math.floor(-3.49)); // -4
// console.log(Math.floor(-3.5)); // -4
// console.log(Math.floor(-3.51)); // -4

// // метод ceil округляет вверх до ближайшего целого
// console.log(Math.ceil(3.49)); // 4
// console.log(Math.ceil(3.5)); // 4
// console.log(Math.ceil(3.51)); // 4
// console.log(Math.ceil(-3.49)); // -3
// console.log(Math.ceil(-3.5)); // -3
// console.log(Math.ceil(-3.51)); // -3

// // метод trunc округляет в меньшую сторону без учета знака числа (отриц будет окр вверх / отрицат будет окр вниз)
// console.log(Math.trunc(3.49)); // 3
// console.log(Math.trunc(3.5)); // 3
// console.log(Math.trunc(3.51)); // 3
// console.log(Math.trunc(-3.49)); // -3
// console.log(Math.trunc(-3.5)); // -3
// console.log(Math.trunc(-3.51)); // -3

// const numberAsString = "100"; // строка 100
// console.log(Number(numberAsString)); // число 100
// console.log(+numberAsString); // число 100

// const numberAsString = "100px";  // строка 100 пикселей
// console.log(parseInt(numberAsString)); // число 100

// const numberAsString = "100.5px";  // строка 100.5 пикселей
// console.log(parseFloat(numberAsString)); // число 100.5

// const numberAsString = "    100.5px"
// console.log(parseInt(numberAsString)) //можно распарсить даже с пробелами
// console.log(parseFloat(numberAsString))