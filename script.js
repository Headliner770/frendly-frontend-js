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

// 7

// let count = 0;

// do {
//   console.log(count);
//   count++;
// } while (count < 10);

// for (let i = 0; i < 4; i++) {
//   alert(i);
// }
// console.log("...цикл завершен");

//  8

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

function get(name) {
  if (!name) return;
  return `знаю, ты ${name}`;
}

console.log(get());
