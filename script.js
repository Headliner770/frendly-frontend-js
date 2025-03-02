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
