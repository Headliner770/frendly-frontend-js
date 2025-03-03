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

// 14 Строки. Метды at, replace, slice, includes, trim...

// const name = "Pavel";
// const emptyStr = "";
// const strWithOneSpace = " ";
// console.log(`Длина строки '${name}: `, name.length); // 5
// console.log(`Длина строки '${emptyStr}: `, emptyStr.length); //0
// console.log(`Длина строки '${strWithOneSpace}: `, strWithOneSpace.length); // 1

// console.log("123".length); // 3

// const name = "Pavel";
// console.log(name[0]); // Получили первый символ строки по номеру индекса !! Р !!
// console.log(name[2]); // Получили первый символ строки по номеру индекса !! v !!
// // Отсчет индексов идет с 0
// console.log(name[name.length - 1]); // Получили последний символ !! l !!

// const name = "Pavel";
// console.log(name.at(0)); // P   Получаем первый символ с начала
// console.log(name.at(1)); // a
// console.log(name.at(-1)); // l  Получаем последний символ с конца

// const text = "КаКойТоТеКсТ";
// console.log(text.toLowerCase()); // Меняет текст строки к нижнему регистру
// console.log(text.toUpperCase()); // Меняет текст строки к верхнему регистру

// const message = "   Hello!  ";
// console.log(`
//     Строка '${message}' имеет длину ${message.length} символов`); //Наша строка имеет длину в 11 символов
// const messageFormatted = message.trim();
// console.log(`
//     Строка '${messageFormatted}' имеет длину ${messageFormatted.length} символов`); //Наша строка имеет длину в 6 символов (trim обрезает пробелы вначале и вконце строки)
// // Так же есть !!! trimStart !!! - обрезает пробелы вначале и !!! trimEnd !!! - обрезает пробелы вконце

// const message = "Пробуем найти !это выражение! в этом предложении";
// // console.log(message.indexOf('найти')) // Поиск индекса по Строке или символу
// console.log(message.includes("найти")); // Определяет есть ли слово/символ в предложениее. Выдает boolean значение

// const message = "Начало строки и конец";
// console.log(message.startsWith("Нач")); // Проверка на начинается ли строка на данное значение
// console.log(message.endsWith("Нач")); // Проверка на заканчивается ли строка на данное значение

// const message = "Hello!";
// console.log(message.indexOf("el", 2)); // Поиск индекса (начиная со второго) строки el
// console.log(message.includes("el", 3)); // Поиск индекса (начиная с третьего) строки el
// console.log(message.startsWith("He", 0));
// console.log(message.endsWith("o!", message.length)); // Номер поз 5 будет концом строки. Проверяем, заканчивается ли строка на 'el'

// const str = "JavaScript";
// // console.log(str.substring(0, 4 )); // Получаем подстроку с 0 до 4 индекса
// // console.log(str.substring(4, 1 )); // Получаем подстроку с 4 до 1 индекса
// console.log(str.slice(1, 3)); // Получаем подстроку с 1 до 3 индекса
// console.log(str.slice(-6)); // Получаем подстроку в диапазоне с конца до -6 символа. Всё остальное обрезается
// console.log(str.slice(-6, -3)); // Получаем подстроку в диапазоне от -6 до -3 символа.
// console.log(str.repeat(3)); // Возвращает строку n-число раз

// const message = "Я изучаю бэкенд, но я ещё ничего не знаю про бэкенд";
// console.log(message.replace("бэкенд", "фронтенд")); // Указываем что на что меняем (первую обнаруженную строку)
// console.log(message.replaceAll("бэкенд", "фронтенд")); // Указываем что на что меняем (Все обнаруженные строки)

// const str = "+7 (999) 999-00-99";
// console.log(str.replace(/\d/g, "#")); // Меняем все цифры на символ #

// const str = "Привет, мир!";
// console.log(str.split(", ")); // Разделяем строку на массив ['Привет', 'мир!']
// console.log(str.split("")); // Разделяем строку на массив (каждый символ элемент массива)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Все эти методы не мутирую исходный код  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const message = " Hello!    ";
// console.log(`
//     Сообщение до: '${message}'`);
// message.trim();
// message.toUpperCase();
// console.log(`
//     Сообщение после: '${message}'`);
// Ничего не поменялось. Все эти методы не изменяют строку. Каждое из выражени вернула результат в никуда. Исходная сущность не поменялась.
// let message = " Hello!    ";
// console.log(`
//     Сообщение до: '${message}'`);
// message = message.trim();
// message = message.toUpperCase();
// console.log(`
//     Сообщение после: '${message}'`);
// //Так измнится. Убрали константу. Каждый раз мы переоприделяли значение message

// // Задачка
// const value = prompt("Введите ваше имя:");
// const clearValue = value.trim().toLowerCase()
// if (clearValue.length === 0) {
//   alert("Error! xxxNamexxx");
// }
// if (clearValue.includes("админ")) {
//   alert("Error admin");
// }

// 15 Массивы - основы. Приведение к строке. Копир, объединение и сравнение массивов.
// Массив - коллекция элементов, которая хранится в своём порядке. Или массив это объект
// const arr = [] //пустой массив
// const arr = ["Привет", 100, true]; // У каждого элемента есть свой индекс (0, 1, 2)
// console.log(arr[0]); // Привет
// console.log(arr[1]); // 100

// const arr = [
//   "Привет",
//   100,
//   true,
//   {
//     name: "Pavel", // добавили объект
//   },
//   () => console.log("Yo!"), // добавили ф-ию
//   [true, true, false], //// добавили массив
// ];
// console.log(arr[3]); // {name: 'Pavel'}
// console.log(arr[3]["name"]); // Pavel
// arr[4](); // Yo! (результат выполн ф-ии)
// console.log(arr[5][0]); // true

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[2]); //  (3) [7, 8, 9]
// console.log(matrix[1][0]); //  4

// const arr = ["Привет", 100, true];
// console.log("arr before:", arr);
// arr[0] = "Пока"; //   !!!!! Перезаписали значение, несмотря на const. Формальны мы не переопределяем прееменную arr. Мы меняем значения конкретных элементов массива !!!!!!!
// arr[1] = 200; // Перезаписали значение
// console.log(arr); // (3) ['Пока', 200, true]
// arr[3] = 234234; // Элементы можно добавлять. Если добавить элемент с индексом 10, то не назначенные индексы без свойств будут пустыми.
// console.log(arr.at(2)); // Доступ к заданному по индексу элемента массива

// const letters = ["A", "B", "C"];
// console.log("letters before:", letters); // (3) ['A', 'B', 'C']
// letters.push("D"); // Добавили элемент в конец массива
// console.log("letters before:", letters); // (4) ['A', 'B', 'C', 'D']
// letters.unshift("E"); // Добавили элем в начало массива. Нумерация остальных элем сдвинулась
// console.log("letters before:", letters); // (5) ['E','A', 'B', 'C', 'D']
// letters.pop(); // Удаляет последний элем массива и возвращает массив
// console.log(letters.shift()); // Выводит элем Е. Удаляет первый элем массива (Е) и возвращает массив
// console.log("letters before:", letters); // (3) ['A', 'B', 'C']

// const arr = [
//   "Hello!",
//   100,
//   { name: "Pavel" },
//   () => console.log("yo"),
//   [true, true],
// ];
// console.log(arr.toString()); //Привели массив к строке

// const arr = ["Hello!", 100, true];
// console.log(arr.join()); // Так же привели массив к строке  // Hello!,100,true
// console.log(arr.join(", ")); // Так же привели массив к строке, отделив элем запятой и пробелом

// const message = "One, two, three, four, five";
// console.log(message.split(", ").join(", ")); //превр строку в массив, затем в строку

// const arr1 = ["A", "B", "C"];
// const arr2 = arr1;
// arr2[0] = "-"; // Изменили элем с индексом 0. Аналогично как в объектах
// console.log("arr1:", arr1); // (3) ['-', 'B', 'C']
// console.log("arr2:", arr2); // (3) ['-', 'B', 'C']

// const arr1 = ["A", "B", "C"];
// const arr2 = [...arr1];
// arr2[0] = "-"; // Изменили элем с индексом 0, но только в arr2   !!!!!!!!!!!!!!!!!!!!!!!!
// console.log("arr1:", arr1); // (3) ['A', 'B', 'C']
// console.log("arr2:", arr2); // (3) ['-', 'B', 'C']

// const arr1 = ["A", "B", "C"];
// const arr2 = arr1.slice(0, 2); //получаем копию части массива (с 0 по 2 элем, но не включая 2)
// console.log("arr1:", arr1);
// console.log("arr2:", arr2); // (2) ['A', 'B']

// const arr1 = ["A", "B"];
// const arr2 = ["C", "D"];
// const totalArr = [...arr1, ...arr2]; //Создали нов массив из двух
// console.log(totalArr); // (4) ['A', 'B', 'C', 'D']

// Массивы как и объекты нельзя сравнивать напрямую

// const arr1 = ["A", "B"];
// const arr2 = ["C", "D"];
// console.log(arr1 === arr2); //false    //Сравниваем по сути ссылки, поэтому false

// const arr1 = ["A", "B", "C"];
// const arr2 = ["A", "B", "C"];
// const areArreysEqual = (array1, array2) => {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     const value1 = array1[i];
//     const value2 = array2[i];

//     const areValueыArrays = Array.isArray(value1) && Array.isArray(value2);
//     if (areValueыArrays) {
//       if (!areArreysEqual(value1, value2)) {
//         return false;
//       } else {
//         continue;
//       }
//     } // добавили проверку

//     if (value1 !== value2) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(areArreysEqual(arr1, arr2)); // true
// // Но если в массивах будут находится непримитивные значения, например добавим в оба массива [], тогда будет False

// 15 Методы массивов - forEach, map, filter, reduce, sort ....

// const data = ["Pavel", 35];
// const [name, age] = data; // Произвели деструктуризацию
// console.log(name);
// console.log(age);

// const letters = ["A", "B", "C", "D", "E"];
// !!!!!!!!!!!!   СТАРЫЙ МЕТОД ПЕРЕБОРА    !!!!!!!!!!!!!
// for (let i = 0; i < letters.length; i++) {
//   console.log(letters[i]);
// }
// Перебор массива с помощью forEach   !!!!!!!!!!!!!!!!!!!!!!
// letters.forEach((letter, i, array) => {
//   console.log(letter, i, array);
//   console.log(letter);
// });

// const prices = [100, 200, 444, 500, 444, 777];                  // ПОВТОРИТЬ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // console.log(prices.indexOf(200)); // По заданнау числу находи его индекс
// console.log(prices.indexOf(777, 3)); //Поиск индекса от заданного индекса
// console.log(prices.lastIndexOf(777, 3)); //Поиск индекса от заданного индекса, но с конца

// const users = [
//   {
//     name: "Alex",
//     age: 28,
//   },
//   {
//     name: "Paul",
//     age: 35,
//   },
//   {
//     name: "Kate",
//     age: 33,
//   },
// ];
// console.log(
//   //Поиск индекса
//   users.findIndex((user) => user.name === "Kate")
//   findIndex // Тот же поиск, но с конца
// );

// const prices = [100, 200, 444, 500, 444, 777];
// console.log(prices.includes(200)); // Поиск оприделенного элемента. Так же можно задать начальный индекс

// const users = [
//   {
//     name: "Alex",
//     age: 28,
//   },
//   {
//     name: "Paul",
//     age: 35,
//   },
//   {
//     name: "Paul",
//     age: 31,
//   },
//   {
//     name: "Kate",
//     age: 33,
//   },
// ];
// // С помощью includes не получится с наличием более сложных структур, тк !!!!! объекты сравниваются по ссылкам !!!!
// console.log(users.some((user) => user.name === "Kate")); //Выдаст true/false. Поиск присутствия
// console.log(users.every((user) => user.age >= 18)); //Проверка возраста в каждом элем массива
// console.log(users.find((user) => user.name === "Paul")); //Поиск целого элемента массива по условию. ИЛи вернет первый если есть похожий элемент
// console.log(users.filter((user) => user.name === "Paul")); //Поиск целого элемента массива по условию. Вернет два схожих элем

// const users = [
//   {
//     name: "Alex",
//     age: 28,
//     city: "Moscow",
//   },
//   {
//     name: "Paul",
//     age: 35,
//     city: "Rostov",
//   },
//   {
//     name: "Bers",
//     age: 31,
//     city: "Krasnod",
//   },
//   {
//     name: "Kate",
//     age: 33,
//     city: "Moscow",
//   },
// ];
// const filteredUsers = users.filter((city, age) => {
//   return city === "Moscow" || age < 30; // Так же поиск по параметрам
// });
// console.log(filteredUsers);

// !!!!!!!!!!!!!!!!!!!!!!!!  map не мутирует основной объект !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const users = [
//   {
//     name: "Alex",
//     age: 28,
//     city: "Moscow",
//   },
//   {
//     name: "Paul",
//     age: 35,
//     city: "Rostov",
//   },
//   {
//     name: "Bers",
//     age: 31,
//     city: "Krasnod",
//   },
//   {
//     name: "Kate",
//     age: 33,
//     city: "Moscow",
//   },
// ];
// const usersFormatted = users.map((user) => {
//   //, index, array//)
//   return `${user.name}, ${user.age} лет, живет в г. ${user.city}`;
// });
// console.log(usersFormatted);

// const users = [
//   {
//     name: "Alex",
//     age: 28,
//     city: "Moscow",
//   },
//   {
//     name: "Paul",
//     age: 35,
//     city: "Rostov",
//   },
//   {
//     name: "Bers",
//     age: 31,
//     city: "Krasnod",
//   },
//   {
//     name: "Kate",
//     age: 33,
//     city: "Moscow",
//   },
// ];
// // let ageSum = 0;
// // for (let i = 0; i < users.length; i++) {
// //   ageSum += users[i].age;
// // }
// // console.log("Средний возраст пользователей:", ageSum / users.length); // Средний возраст
// // Можно решить, но более эффективно через reduce
// debugger;
// const ageSum = users.reduce((sum, { age }) => sum + age, 0); //reduceRight для перебора массива справа налево
// console.log("Средний возраст пользователей:", ageSum / users.length);

// revers; // Выводит массивы в обрятном порядке. !!!!!! ВАЖНО !!!!!  Метод revers Мутирует исходную сущность !!!!!!!
// // Если мы не хотим мутировать основной массив при исп revers. Можно сделать копию : const reversedUsers = [...user].reverse()

// const names = ["Vasya", "Alex", "Max", "Paul"];
// const sortedNames = [...names].sort(); //Для обхода мутации можно работать над копией [...names]
// console.log("Отсортированные имена:", sortedNames); //sort вывел в алфавитном порядке по возрастанию
// // Метод sort так же как и revers мутирует исходный массив

// const numbers = [8, 4, 500, 99];
// const sortedNumbers = [...numbers].sort((a, b) => a - b);
// console.log("Отсортированные имена:", sortedNumbers); //Добавили собственнубф-ию сортировки с применением Sort

// Перебор объекта. Коллекции Map и Set

// const user = {
//   name: "Pavel",
//   age: 35,
//   city: "Moscow",
// };
// //Метод for in
// for (const key in user) {
//   console.log("Имя свойства:", key);
//   console.log("Значение свойства:", user[key]);
// }

// const user = {
//   name: "Pavel",
//   age: 35,
//   city: "Moscow",
// };
// const userKeys = Object.keys(user); // Из объекта можем получить массив ключей
// console.log("userKeys:", userKeys);
// userKeys.forEach((key) => {
//   // Перебираем через forEach
//   console.log("Имя свойства:", key);
// });

// const user = {
//   name: "Pavel",
//   age: 35,
//   city: "Moscow",
// };
// const userValues = Object.values(user);
// console.log("userValues:", userValues);
// userValues.forEach((value) => {
//   console.log("Значение свойства:", value); // Получаем массив значений
// });

// const user = {
//   name: "Pavel",
//   age: 35,
//   city: "Moscow",
// };
// const userEntries = Object.entries(user);
// console.log("userEntries:", userEntries);
// // Object.entries позволяет получить из объекта массив, где каждый элем это массив пара ключ-значение
// userEntries.forEach(([key, value]) => {
//   console.log("Имя свойства:", key);
//   console.log("Значение свойства:", value);
// });

// const data = {};
// data[1] = "Один как число";
// data["1"] = "Один как строка";
// console.log(data); // Выдаст последнее {1: 'Один как строка'}

// const data = new Map([
//   [1, "Один как число"],
//   ["1", "Один как строка"],
// ]);

// const data = new Map();
// data.set(1, "Один как число");
// data.set("1", "Один как строка");
// console.log(data.get(1)); // Один как число
// console.log(data.get("1")); // Один как строка

// const data = new Map();
// data.set("name", undefined);
// console.log(data.has("name"));
