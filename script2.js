// import initTabs, { selectors } from "./tabs.js";
// import { initModals } from "./modals.js";
// import { initSliders } from "./sliders.js";

// initTabs();
// initModals();
// initSliders();

//  20  // SetTimeout и SetInterval, clearTimeout
//  Применяются для отбражения (спустя 10 сек) окошка с чатом техподдержки, после основной загрузки страницы

// setTimeout(() => {}, 2000); //setTimeout или таймер (2000 миллисек (число любое))

// setTimeout(() => {
//   alert("Уведомление");
// }, 2000);

// const logMessage = (name, age) => {
//   alert(`Hello, my name is ${name}, to me ${age}`);
// };
// setTimeout(logMessage, 2000, "Pavel", 35); // Hello, my name is Pavel, to me 35.

// const logMessage = () => {
//   alert("asdasd");
// };
// const timerId = setTimeout(logMessage, 3000); // вызывает окошко
// clearTimeout(timerId); // очищаем таймаут. Окошко не появится

// //Обязательно нид записать в переменную (const intervalId)
// const intervalId = setInterval(() => {
//   console.log("Hello!");
// }, 1000); // непрерывный вызов каждую секунду
// clearInterval(intervalId); //передаем сущность intervalId аргументом. Прерываем вызов кода

// const intervalId = setInterval(() => {
//   console.log("Hello!");
// }, 1000); // непрерывный вызов каждую секунду
// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000); // прерывает вызов через 5 сек

// setInterval не гарантирует, что предыдущий вызов кода не завершил свою работу
// setInterval(() => {
//   alert("asdad");
// }, 1000); //Окошко будет появляться постоянно, даже если его будем закрывать, время накладывается

// setTimeout(function logMessage() {
//   alert("23dfs");
//   setTimeout(logMessage, 1000);
// }, 1000); // Здесь окошко будет появляться строго через 1 сек. Получили более чистый аналог setInterval

// console.log("№1");
// setTimeout(() => {
//   console.log("№2");
// }, 0);
// console.log("№3");
// Выведется :  №1    №3    №2.  Код с №2 вызвался не сразу (хоть и указано 0 мс), а после других.
// Это из-за особенностей браузера, тк вв setTimeout есть минимальная задержка, хоть и указано 0 мс и браузер выполнит этот код не сразу (не ранее чем через 4 миллисек)

//  21 // Обработчик ошибок - try catch finally, throw, класс Error

// console.log("Начало кода...");
// const userData = undefined;
// names.forEach((name) => {
//   console.log("Name:", name);
// });
// console.log("Конец кода..."); // Начало кода... затем Ошибка. Для отлова ошибок и существ try catch

// console.log("Начало кода...");
// try {
//   // пробуем выполнить код
// } catch (error) {
//   // обрабатываем возникшую ошибку
// }
// console.log("Конец кода...");

// console.log("Начало кода...");
// try {
//   const names = ["Alex", "Paul", "Kate"]; // если массив заменим на undefiend, то ошибку отловим
//   names.forEach((name) => {
//     console.log("Name:", name);
//   });
// } catch (error) {
//   console.log("!!Error!!:", error);
// }
// console.log("Конец кода...");

// // Try catch может отловить ошибку только в синтаксически корректном js-коде
// console.log('3242')
// try {
//  -3$#@!
// } catch (error) {
// console.log('oshibka', error);
// }
// console.log('223');  // В этом случае try catch не отработает !!!

// !!! Если в блоке try есть асинхронный код, который может отраб с ошибкой, то отловить такую ошибку не получится !!!
// console.log("Начало кода...");
// try {
//   setTimeout(() => {
//     const names = undefined;
//     names.forEach((name) => {
//       console.log("Name", name);
//     });
//   }, 3000);
// } catch (error) {
//   console.log("oshibka:", error);
// }
// console.log("Конец кода...");

// Чтобы корректно отработать подобный случай над try catch перенести в тело асинхронной ф-ции:
// console.log("Начало кода...");
// setTimeout(() => {
//   try {
//     const names = undefined;
//     names.forEach((name) => {
//       console.log("Name", name);
//     });
//   } catch (error) {
//     console.log("oshibka:", error);
//   }
//   console.log("Конец кода...");
// }, 3000);

// error не просто строка. Это объект содержащий 3 свойства: name, message и stack
// console.log("Начало кода...");
// try {
//   const names = undefined;
//   names.forEach((name) => {
//     console.log("Name", name);
//   });
// } catch (error) {
//   console.log("full error:", error);
//   console.log("name:", error.name);
//   console.log("message:", error.message);
//   console.log("stack:", error.stack);
// }
// console.log("Конец кода...");

// console.log("Начало кода...");
// try {
//   const userJSON = `{
// 'age': 28}`;
//   const user = JSON.parse(userJSON);
//   const { name, age } = user;
//   // дополняем код собственной проверкой. Генерим кастомную ошибку
//   if (!name) {
//     const errorMessage = "Имя не заполнено";
//     throw new Error(errorMessage); // передаем аргумент в скобках, который попадет в конструктор класса Error
//   }
//   console.log(`Привет, ${name}
//     Твой возраст - ${age}, верно ?`);
// } catch (error) {
//   console.log("Возникла ошибка:", error);
// }
// console.log("Конец кода...");

// try {
//   // пробуем выполнить код
// } catch (error) {
//   // обрабатываем возникшую ошибку
// } finally {
//   // выполняем при любом раскладе. Даже если в try будет поймана ошибка finally отработает.
// }
// console.log("Конец кода...");

//  22  // Событийный цикл Event Loop, асинхронный код, Promises, async / await
// Чтение кода выполняет движок JS v8
// Последовательное чтение кода называется синхронным
// console.log(1); // 1
// console.log(2); // 2
// console.log(3); // 3

// const wait = (ms, callback) => {
//   const now = new Date().getTime();
//   while (new Date().getTime() < now + ms) {
//     /* ничего не делаем */
//   }
//   callback();
// };
// console.log(1); // сначала сразу выведится 1
// wait(3000, () => console.log(2)); // затем спустя 3сек выведится 2
// console.log(3); // последним, сразу же выведится 3
// Код последовательный, но логирование числа 2 происходит с заданной задержкой, соотв строка 3 выполняется не сразу.
// Данная задержка блокирует всё остальное, пока не выполнит тот код, где задана задержка

// Делаем функцию асинхронной, чтобы она не блокировала выполнение дальнейшего кода
// const wait = (ms, callback) => {
//   setTimeout(callback, ms);
// };
// console.log(1); // сначала сразу выведится 1
// wait(3000, () => console.log(2)); // последним, спустя 3сек выведится 2
// console.log(3); // затем сразу же выведится 3
// За последовательное выполнение кода и за своевременное выполн асинхронных задач отвечает Event Loop !!!!!!!!
// JS работает в одном потоке (основным потоком выполнения), то есть он может выполнять только одну операцию за раз.
// Если в коде есть задачи, выполн которых занимает некоторое время, то такие задачи считаются асинхронными !!!!!
// Event Loop создает очеред в которую добавляются все асинхронные задачи.
// Очередь задач - это список задач, которые движку JS необх выполн, как только оснвной поток выполнения будет освобожден.
// Главная задача событийного цикла Event Loop постоянно проверять есть ли в очереди задачи и свободен ли поток выполнения.
// Если основной поток свободен, то событийный цикл берет первую задачу из очереди и выполняет её.

// Синхронный код, выполняющийся сразу
// console.log("Начало программы");
// // Асинхронная операция с использованием setTimeout
// setTimeout(() => {
//   console.log("Асинхронная задача выполнена");
// }, 2000); // задержка в 2 сек
// // Синхронный код, выполняющийся сразу
// console.log("Конец программы");
// Здесь первым вполнится код "Начало программы", тк это синхронная операция
// Затем вызывается ф-я setTimeout, она ставит переданную первым аргументом аноним стрел ф-ю в очередь задач с задерж в 2сек.
// Основной поток выполнения сразу же переходит к следующему коду и не ждет выполнения setTimeout. Выводится "Конец пр.."
// Через 2 сек ф-ия, переданная setTimeout попадает в очередь задач. Событийный цикл видит, что осн поток свободен, вся синхр часть кода выполнена и соб цикл выполн задачу из таймера (выводит "Асинхронная задача...")

// Таким образом соб цикл позволяет вып асинхр операции без блокировки основного потока, давая возм вып синхронный код сразу и продолжать работу с асинхронными задачами позже, когда осн поток будет свободен.

//  !!!!!  Колбэк - это функция, которая вызывается в ответ на совершение определенного события !!!!!!
// setTimeout(() => {
//   console.log("Hello!");
// }, 3000);

//  Колбэк - это способ асинхронно выполнить какое то действие. Их часто исп когда нид получить ответ от сервера.

// Бывает, что код может содержать большое кол-во колбэков. Особенно часто такое может быть при обращении к серверу.
// Такой синтаксис называют CallBach Hell. ОН трудночитаем и еще труднее его поддерживать.
// По результатам задачи нужно вып другую задачу и по рез др задачи, нужно вып еще задачу и происходит многоуровневая вложенность из колбэков. Помогает решить эту проблему Promise.

// Promise - специальный объект-надстройка для работы с асинхронным кодом
// Promise имеет 3 состояния:
// pending - ожидание, исходное состояние
// fulfilled - выполнено успешно, получен результат
// rejected - выполнено с ошибкой
// Своё состояние promise может изменить только один раз !!!!!!
// Основные методы Promise:
// then() - обрабатывает fulfilled состояние
// catch() - обрабатывает rejected состояние

// Асинхронная ф-ия возврощает promise в качестве результата.

// const promise = new Promise((fulfill, reject) => {
//   console.log("Начало, состояние pending...");
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       fulfill("Ура, состояние fulfilled");
//     } else {
//       reject("Увы, состояние rejected");
//     }
//   }, 3000);
// });
// promise
//   .then((successData) => {
//     console.log("Успех! Получены данные:", successData);
//   })
//   .catch((errorData) => {
//     console.log("Ошибка. Получены данные:", errorData);
//   })
//   .finally(() => {
//     console.log("Код, выполняющийся в самом конце, независимо от результата");
//   });

//  Возможет и немного другой вариант кода, где изменен блок try catch.
//  Код отработает точно так же, как и в предыдущем варианте.
// const promise = new Promise((fulfill, reject) => {
//   console.log("Начало, состояние pending...");
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       fulfill("Ура, состояние fulfilled");
//     } else {
//       reject("Увы, состояние rejected");
//     }
//   }, 3000);
// });
// promise
//   .then(
//     (successData) => {
//       console.log("Успех! Получены данные:", successData);
//     },
//     (errorData) => {
//       console.log("Ошибка. Получены данные:", errorData);
//     }
//   )
//   .finally(() => {
//     console.log("Код, выполняющийся в самом конце, независимо от результата");
//   });
// Первый вариант кода предпочтительней, более читабельный.

// Колбэкхэлл с применением promises
// const makeRequest = (url, onSuccess) => {
//   return new Promise((fulfill) => {
//     fulfill("Ура, состояние fulfilled");
//   });
// };
// const sellerId = 154;
// makeRequest(`/api/sellers/${sellerId}`)
//   .then((seller) => {
//     const firstProductId = seller.productIds[0];
//     return makeRequest(`/api/products/${firstProductId}`);
//   })
//   .then((product) => {
//     const firstReviewId = product.reviewsIds[0];
//     return makeRequest(`/api/reviews/${firstReviewId}`);
//   })
//   .then((review) => {
//     const authorName = review.author.name;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Альтернатива. async awayt
// async function getSomething() {
//   return "Hello!";
// }
// getSomething().then((something ) => {
//   console.log(something);
// });

// async function getSomething() {
//   return new Promise((fulfill) => {
//     setTimeout(() => {
//       fulfill("Hello!");
//     }, 3000);
//   });
// }
// getSomething().then((something) => {
//   console.log(something);
// });

// async function getSomething() {
//   return new Promise((fulfill) => {
//     setTimeout(() => {
//       fulfill("Hello!");
//     }, 3000);
//   });
// }
// console.log("Начало");
// // вместо then
// const something = await getSomething();
// console.log(something);
// console.log("Конец");
// Снчало вывелось сообщение 'Начало', спустя 3сек 'Hello!' и сразу же 'Конец'.

// Этот код был ранее. Переделали его с применением async await
// const makeRequest = async (url, onSuccess) => {
//   return new Promise((fulfill) => {
//     fulfill("Ура, состояние fulfilled");
//   });
// };
// const seller = await makeRequest(`/api/sellers/${sellerId}`);
// const firstProductId = seller.productIds[0];
// const product = await makeRequest(`/api/products/${firstProductId}`);
// const firstReviewId = product.reviewsIds[0];
// const review = await makeRequest(`/api/review/${firstReviewId}`);
// const authorName = review.author.name;

// Чтобы отловит ошибку
// const makeRequest = async (url, onSuccess) => {
//   return new Promise((fulfill) => {
//     fulfill("Ура, состояние fulfilled");
//   });
// };
// try {
//   const seller = await makeRequest(`/api/sellers/${sellerId}`);
//   const firstProductId = seller.productIds[0];
//   const product = await makeRequest(`/api/products/${firstProductId}`);
//   const firstReviewId = product.reviewsIds[0];
//   const review = await makeRequest(`/api/review/${firstReviewId}`);
//   const authorName = review.author.name;
// } catch (error) {
//   console.log(error);
// }

//  23  // Модули. Декомпозиция или разделение кода на более мелкие части и отдельные файлы это основы Рефакторинга.

// Если путь импорта к файлу очень длинный (файл находится к примеру в трёх папках) то в первой вложенной папке создаем файл 'index.js' и в нем прописываем путь экспорта: export * './folder-1/folder-2/contacts.js'  (где * означает Всё). После данных манипуляций в файле с импортом : import * as constants from "./constants" (Это называется Реэкспорт)
//

//  24  //  DOM (Document Object Model) и BOM (Browser Object Model)

// console.log(window); // window - это главный объект для взаимодействия с браузерным окружением.
// Браузерное окружение даёт нам возможность для оживления интерфейсов.
// Всё находящееся в нем можно поделить на 3 категории:
// - Основной JS; - DOM; - BOM.

// - BOM. С ним получаем возможность пользоваться спец объектами:
// console.log("Информация о браузере:", window.navigator);
// console.log("Информация о экране:", window.screen);
// console.log("Информация о URL:", window.location);
// console.log("Информация об истории текущей сессии:", window.history);

// // Сохранить данные в localStorage
// window.localStorage.setItem("id", JSON.stringify({ id: 123 }));

// const id = JSON.parse(
//   // Получить данные из localStorage
//   window.localStorage.getItem("key-name")
// );
// // Отправка на сервер GET-запроса и получение ответа
// window
//   .fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => console.log("Пользователи:", users));

// DOM. Объектная модель документа, позволяющая нам взаимодействовать с содержимым страницы в виде объектов. DOM-дерево.
// console.log(window.document);
// Вся иерархия вложенных друг в друга элементов, а также вложенные в элементы текст, всё это и является DOM-деревом. Абсолютно каждый элемент в DOM-дереве является объектом.
// console.dir(window.document); //состоит из узлов
// К window можно обращатсья без слова window
// console.log(document);

// const location = "Moscow"; // Недопустимое имя переменной на глобал уровне
// const cityLocation = "Moscow"; // Допустимое имя переменной

// console.log("Текущий полный URL-адрес:", window.location.href);
// Если очень нужно создать переменную с именем, которая есть объекте window, то можно это сделать только не на глобал уровне. Но лучше таких переменных не создавать !!!!!!!!!!!!!!

//  25  // DOM - Навигация по элементам дерева, атрибуты async и defer.

// console.dir(document); // Объект со множеством свойств и методов
// console.log(document.documentElement); // Докум html, который в разметке обарачивает всю остальную разметку
// console.log(document.head); // хэд
// console.log(document.body); // боди

// Производится в index.html // Можно подключение разместить здесь, но обязательно добавить defer. defer гарантирует, что скрипт дождется, что вся html разметка будет готова, а потом уже скрипт запустится.

// console.log("Элемент <body>:", document.body);

// console.log("Родительский элемент над <body>:", document.body.parentElement);
// console.log(
//   "Соседний элемент перед <body>:",
//   document.body.previousElementSibling
// );
// console.log("Соседний элемент после <body>:", document.body.nextElementSibling); // Соседний элемент после <body>: null . null тк в разметке после боди ничего нет

// console.log("Дочерние элементы <body>:", document.body.children); // Список всех прямых детей DOM-элем body
// const divElement = document.body.children[0]
// console.log('Элемент <div>:', divElement);
// console.log('Родительский элемент <div>:', divElement.parentElement);

//  26  // Поиск элементов в DOM-дереве.
