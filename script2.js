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

// Пример: Для доступа к button, который расположен в body внутри 3х div:
//   const buttonElement =
//   document
//   .body             // <body>
// .children[0]        // <div class='box-1'
// .children[0]        // <div class='box-2'
// .children[0]        // <div class='box-3'
// .children[0]        // <div id='myButton'
// console.log("Кнопка:", buttonElement);
//  Существуют методы поиска по DOM-дереву

// index.html :
// <body>
//  <div>
//   <div>
//     <button id='myButton' type='button'>
//         Клик
//     </button>
//   </div>
//  </div>
// </body>

//  script.js :
// const buttonElement = document.getElementById("myButton"); // теперь в переменной buttonElement хранится ссылкана конкретный элем DOM-дерева (на нашу кнопку)
// console.log("buttonElement:", buttonElement);

// Если у кнопки нет id, то через document.querySelector('button') //
// Если нужен доступ к нескольким элементам, то через document.querySelectorAll('.list .item')
// Затем можно перебрать этот список:
// listItemElements.forEach((element) => {
//   console.log("Элемент списка:", element);
// });

// Мы можем использовать методы querySelector и querySelectorAll у любого DOM-элемента, а не только у объекта document.

// Для поиска элемента снизу вверх
// const thirdBoxElement = document.querySelector(".box-3"); // от box-3
// const firstBoxElement = thirdBoxElement.closest(".box-1"); // в аргументе селектор элемента, который нид найти
// console.log("firstBoxElement:", firstBoxElement);

// Есть методы поиска оооочень редко используемые:
// const formElement = document.getElementsByTagName("form"); // Возвращает список элем по имени тэга
// const radioGroupElements = document.getElementsByClassName("radio-group"); // Возвращает список элем по имени класса
// const inputElements = document.getElementsByName("specialization"); // Возвращает список элем по значению атрибута name
// Эти методы возвращают живые коллекции (в отличае от querySelector и querySelectorAll, которые возвращают статические коллекции) и они всегда отражают актуальное состояние DOM-дерева.

// Иногда крайне необходимо, чтобы переменные в js-коде всегда были синхронизированны с актуальных DOM-деревом, поэтому нужны методы :
//  const formElements = document.getElementsByTagName('form')
//  const radioGroupElements = document.getElementsByClassName('radio-group')
//  const inputElements = document.getElementsByName('specialization')
//  но полученные списки элементов, полученные этими методами нельзя перебрать через forEach, а нужно превратить в массив и применить спрэт-оператор :
//  const formElements = [...document.getElementsByTagName('form')]  //  после этого можно перебрать через forEach

// Нэйминг
// Чтобы разделять в коде сущности на DOM-элементы и всё остальное для переменных DOM-элементов рекомендуется всегда добавлять суффикс 'element', чтобы избежать путанницу в коде. linkElement, listItemElement, inputElement и тд. Если элементов хранится несколько, то нид применять суффикс 'elements'.

// дата атрибуты
//  в html
//  ...
//   <div class='slider' data-js-slider='какие-то-настройки'>
//     <ul class='slider__list' data-js-slider-list>
//       <li class='slider__slide' data-js-slider-slide>...</li>
//       <li class='slider__slide' data-js-slider-slide>...</li>
//       <li class='slider__slide' data-js-slider-slide>...</li>
//     </ul>
//   </div>
//  ...
//  в js
// const sliderElement = document.querySelector('[data-js-slider]')
// const sliderListElement = document.querySelector('[data-js-slider-list]')
// const sliderSlideElement = document.querySelectorAll('[data-js-slider-slide]')

//  27  //  DOM-элементы: свойства и атрибуты, поведение value, data-* атрибуты

//  У каждого DOM-элемента есть большое количество параметров
//  в html
//  ...
//  <body>
//   <form class='form' action='/login'>
//       <li class='slider__slide' data-js-slider-slide>...</li>
//       <li class='slider__slide' data-js-slider-slide>...</li>
//       <li class='slider__slide' data-js-slider-slide>...</li>
//     </ul>
//   </div>
//  </body>
//  ...
//  в js
// const formElement = document.querySelector(".form");
// const loginInputElement = document.querySelector('.form__input[name="login"]');
// const passwordInputElement = document.querySelector('.form__input[name="password"]');
// const submitButtonElement = document.querySelector(".form__button");
// console.dir(formElement);  // при выводе этих DOM-элементов получим их представление в виде объектов
// console.dir(loginInputElement);
// console.dir(passwordInputElement);
// console.dir(submitButtonElement);
// У каждого дом-элем будут только те свойства, которые ему соответствуют.
// Если для элем разметки можно указать какой то атрибут и при этом разметка останется валидной, то в jsкоде при обращении к этому до-элем, как к объекту, мы можем получить одноименное св-во. Эти свойства работают по принципу геттеров и сеттеров.
// console.log('fromElement action:', formElement.action); // получаем значение св-ва объекта. Обращаемся как к геттеру.
// formElement.action = '/register' // поменяли значение. Теперь обращаемся как к сеттеру.

//  28  // Стили и CSS-классы

// Варианты написания стилей :
// Стили в отдельном файле
/* <link rel="stylesheet" href="styles.css" />; */

// Стили в элементе <style>
/* <style>
    // ...
</style> */

// Стили в атрибуте style
/* <div
  class="box"
  style="
 width: 100px>;
 height: 100px;
 "
></div>; */

// Самый оптимальный вариант это размещение стилей в отдельном css-файле !!!!!!!!!!!!!!!!!!

// const boxElement = document.querySelector(".box");
// boxElement.style.position = "absolute";
// boxElement.style.top = "40px";
// boxElement.style.left = "80px";

// // для добавления css-класса DOM-элементу
// const boxElement = document.querySelector(".box");
// console.dir(boxElement);
// boxElement.classList.add("red", "big"); // добавили
// boxElement.classList.remove("red"); // удалили
// boxElement.classList.toggle("red"); // добавляет класс, если такого класса у элема нет или удаляет класс, если класс у элемента есть.

// // так же toggle можно добавлять при условии true/false:
// const boxElement = document.querySelector(".box");
// const hasError = false;
// boxElement.classList.toggle("red", hasError);
// Хорошо подходит для свойств active на бургер-кнопке, состояние visible на модальном окне и тд.

// управление css-переменными через js
// const boxElement = document.querySelector(".box");
// boxElement.style.setProperty("--border-color", "blue", "important");

//  29  // Браузерный JS: размеры и координаты DOM-элементов

// Пример.
// html
// див с классом box
// style.css
// .box {overflow: auto; width: 100px; height: 100px; border: 20px solid indianred}
// border-left-width: 30px;
// border-top-width: 10px;
// js
// const boxElement = document.querySelector(".box"); // DOM-элемент
// console.log("Полная ширина:", boxElement.offsetWidth);
// console.log("Полная высота:", boxElement.offsetHeight);
// console.log("Ширина левой рамки:", boxElement.clientLeft);
// console.log("Ширина верхней рамки:", boxElement.clientTop);

// console.log("Расстояние от левой границы элем до внутренностей:", boxElement.clientLeft) // + еще 15px скроллбара
// console.log("Расстояние от верхней границы элем до внутренностей:", boxElement.clientTop)

// console.log("Ширина без учета рамки и скроллбара:", boxElement.clientWidth)
// console.log("Высота без учета рамки и скроллбара:", boxElement.clientHeight)

// console.log("Ширина без учета рамки, включая прокручиваемую область:", boxElement.scrollWidth)
// console.log("Высота без учета рамки, включая прокручиваемую область:", boxElement.scrollHeight)

// console.log("Ширина невидимой уже прокрученной по горизонтали области:", boxElement.scrollLeft)
// console.log("Высота невидимой уже прокрученной по вертикали области:", boxElement.scrollTop)

// Системы координат в браузере : Относительно окна браузера и относительно всей страницы

// const boxElement = document.querySelector(".box");
// const boxElementRectParams = boxElement.getBoundingClientRect();
// console.log(boxElementRectParams);  // получаем различные координаты элемента

//  30  // JS в браузере: размеры окна и траницы, скролл

// const htmlElement = document.documentElement;  // вьюпорт
// console.log(
//   "Ширина окна через document.documentElement:",
//   htmlElement.clientWidth
// );
// console.log(
//   "Высота окна через document.documentElement:",
//   htmlElement.clientHeight
// );
// console.log("Ширина окна через window:", window.innerWidth); // через windiw не будут учитываться размеры скроллбаров
// console.log("Высота окна через window:", window.innerHeight); // через windiw не будут учитываться размеры скроллбаров

// ширина и высота окна целиком
// const htmlElement = document.documentElement;
// console.log("Ширина окна:", htmlElement.clientWidth);
// console.log("Высота окна:", htmlElement.clientHeight);
// console.log("Ширина окна:", htmlElement.scrollWidth);
// console.log("Высота окна:", htmlElement.scrollHeight);

// const htmlElement = document.documentElement;
// const bodyElement = document.body;
// const fullPageHeight = Math.max(
//   htmlElement.clientHeight,
//   htmlElement.scrollHeight,
//   htmlElement.offsetHeight,
//   bodyElement.clientHeight,
//   bodyElement.scrollHeight,
//   bodyElement.offsetHeight
// );
// console.log("Наверняка корректная высота страницы:", fullPageHeight);

// координаты
// console.log(
//   "Координаты позиции скролла страницы:",
//   window.scrollX,
//   window.scrollY
// );

// программный скролл страницы
// window.scroll({
//   top: 200,
//   behavior: "smooth",
// });

// Двойной скролл через setTimeout
// window.scrollBy({
//   top: 200,
//   behavior: "smooth",
// });
// setTimeout(() => {
//   window.scrollBy({
//     top: 100,
//     behavior: "smooth",
//   });
// }, 2000);

// Скролл до видимости оприделенного элемента (например до секции с отзывами (по id))
// const reviewsSectionElement = document.querySelector("#reviews");
// reviewsSectionElement.scrollIntoView({ behavior: "smooth" }); // для плавности

// но для лучшей отрисвоки оборачивать такой код в setTimeout (Лучше делать так!!!)
// const reviewsSectionElement = document.querySelector("#reviews");
// setTimeout(() => {
//   reviewsSectionElement.scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//   });
// }, 300);

//  31  // DOM манипуляции: создание элем, вставка, перемещение, удал и клон

// html
/* <body>
  <div class="box">
    Текст
    <p class="paragraph-1">Первый параграф</p>
    <p class="paragraph-2">Второй параграф</p>
    <p class="paragraph-3">Третий параграф</p>
  </div>
</body>; */
// js
// Спомощью textContent можем получить содержимое DOM-лемента, включая текст из всех его дочерних элемов
// const boxElement = document.querySelector(".box");
// console.log("Текстовое содержимое boxElement:", boxElement.textContent); // выводит весь текст

// const firstParagraphElement = document.querySelector(".paragraph-1");
// firstParagraphElement.textContent = "Обновленный первый параграф"; //  можем поменять значение текстового содержимого
// console.log(
//   "Текстовое содержимое firstParagraphElement:",
//   firstParagraphElement.textContent
// );

// const boxElement = document.querySelector(".box");
// boxElement.textContent = "Обновленный текст"; // Так все текстовое содержимое перезапишется на "Обновленный текст"

// const boxElement = document.querySelector(".box");
// console.log("HTML-содержимое boxElement:", boxElement.innerHTML); // Получаем всю разметку элема целиком, включчая и синтакис вложенных тэгов
// boxElement.innerHTML = `Обновленный текст <p>Новый параграф</p>`; // так мы заменяем содержимое
// если здесь использовать не =, а +=, то добавим содержимое

// const newParagraphElement = document.createElement("p");
// newParagraphElement.textContent = "Четвертый параграф";
// newParagraphElement.classList.add("paragraph-4");
// console.log(newParagraphElement); // <p class="paragraph-4">Четвертый параграф</p>
// cosnt boxElement = document.querySelector('.box')
// boxElement.append(newParagraphElement); // в нашем html добавился новый параграф
// boxElement.prepend(newParagraphElement); // в нашем html добавился новый параграф в начало. так же есть before after
// boxElement.replaceWith(newParagraphElement) // полностью заменяет

// const firstBoxElement = document.querySelector(".box-1");
// const secondBoxElement = document.querySelector(".box-2");
// const thirdParagrphElement = document.querySelector(".paragraph-3");
// const fourthParagrphElement = document.querySelector(".paragraph-4");
// const fifthParagrphElement = document.querySelector(".paragraph-5");
// const newParagraphElementMarkup = "<p>Просто текст</p>";
// firstBoxElement.insertAdjacentHTML("afterbegin", newParagraphElementMarkup); // Вставляем "<p>Просто текст</p>" в начало box-1
// secondBoxElement.insertAdjacentHTML("beforebegin", newParagraphElementMarkup); // Вставляем "<p>Просто текст</p>" в конец box-2
// thirdParagrphElement.insertAdjacentHTML(
//   "beforebegin",
//   newParagraphElementMarkup
// ); // Вставляем "<p>Просто текст</p>" перед paragraph-3

// const firstBoxElement = document.querySelector(".box-1");
// firstBoxElement.remove() // удаление

// const firstBoxElement = document.querySelector(".box-1");
// const firstBoxElementClone = firstBoxElement.cloneNode(); // клонирование (поверхностное, без учета содержимого)
// firstBoxElement.after(firstBoxElementClone); // вставка в дом-дерево
// const firstBoxElementClone = firstBoxElement.cloneNode(true); // клонирование (глубокое, с учетом содержимого)

// const firstBoxElement = document.querySelector(".box-1");
// const thirdBoxElement = document.querySelector(".box-3");
// thirdBoxElement.after(firstBoxElement) // перемещение

//  32  // Браузерные события: всплытие и погружение, сп-бы обработки событий, отмена всплытия
// Каждое событие исходит от конкретного дом-элемента

// Чтобы начать в коде обрабатывать события, нид сначала назначить дом-элемементу обработчик:
// 1) Использование атрибута в html-разметке (Но это так себе способ !!!!!!!!!!!!)
// <button type='button' onClick="console.log('Произошел клик)">Нажми меня</button>
// в js
// const logMessage = () => {
// console.log('Произошел клик');
// } // тогда в onClick можно передать logMessage()

// 2) Через свойство события у дом-элемента
// const buttonElement = document.querySelector('button')
// const logMessage = () => {
//   console.log("Произошел клик");
// };
// buttonElement.onclick = logMessage; // если укажем (), то в консоли сразу выведется значение, клик ничего не даст

// !!! У этих двух способов есть минус. Нельзя повесить на один элемент несколько обработчиков одного события. !!!!

// !!! Самый топовый способ по добавлению элементу обработчика событий это метод addEventListener. !!!!
// const buttonElement = document.querySelector("button");
// const logNumberOne = () => {
//   console.log(1);
// };
// buttonElement.addEventListener("click", logNumberOne); // передаем во втором параметре ссылку на какую либо ф-ию
// На один дом-элемент можно повесить сколь угодно ф-ий обраб

// в html есть две кнопки с классами button-1 и button-2
// const firstButtonElement = document.querySelector(".button-1");
// const logMEssage = () => {
//   console.log("Произошел клик");
// };
// firstButtonElement.addEventListener("click", logMEssage);
// const secondButtonElement = document.querySelector(".button-2");
// secondButtonElement.addEventListener("click", (logMEssage) => {
//   firstButtonElement.removeEventListener("click", logMEssage); // тем самым одна кнопка добавляет обраб события, второй кнопкой удаляем с элем кнопки конкр обраб событий
// });

// сущнсоть event
// const buttonElement = document.querySelector("button");
// buttonElement.addEventListener("click", (event) => {
//   console.log(event);
// });

// !!!!! Всплытие и погружение !!!!! Оч важно !!!!!!!!!!!!
// Пример
// У нас в разметке есть вложенные друг в друга элементы:
//  div с классом box-1 -> div с классом box-2 -> div с классом box-3
// js
// const firstBoxElement = document.querySelector(".box-1");
// const secondBoxElement = document.querySelector(".box-2");
// const thirdBoxElement = document.querySelector(".box-3");
// firstBoxElement.addEventListener("click", () => {
//   console.log("Клик по box-1");
// });
// secondBoxElement.addEventListener("click", () => {
//   console.log("Клик по box-2");
// });
// thirdBoxElement.addEventListener("click", () => {
//   console.log("Клик по box-3");
// });
// При клике по box-3 : Клик по box-3  Клик по box-2  Клик по box-1
// Все обраб срабатывают на бокс-3, затем событие как бы сплывает вверх по дом-дереву до корневого элема дом-дерева.
// Это и называет всплытием событий или Bubbling !!!!!!!!!!!!!!!!
// Самый глубокий элемент с которого событие начинает всплывать называется Целевым элементом

// const firstBoxElement = document.querySelector(".box-1");
// const secondBoxElement = document.querySelector(".box-2");
// const thirdBoxElement = document.querySelector(".box-3");
// firstBoxElement.addEventListener("click", (event) => {
//   console.log("Клик по box-1", event.target, event.currentTarget); // Клик по box-3  <div class="box-3"> box-3 </div>
// });
// secondBoxElement.addEventListener("click", (event) => {
//   console.log("Клик по box-2", event.target, event.currentTarget); // Клик по box-2  <div class="box-3"> box-3 </div>
// });
// thirdBoxElement.addEventListener("click", (event) => {
//   console.log("Клик по box-3", event.target, event.currentTarget); // Клик по box-1  <div class="box-3"> box-3 </div>
// });
// Бокс 3 в данном случае это Целевой элемент

// // передать вторым аргументом function()
// firstBoxElement.addEventListener("click", function() {
//   console.log("Клик по box-1", this);
// }); // Если записать код так, то это равносильно варианту сверху event.currentTarget

// thirdBoxElement.addEventListener("click", (event) => {
//   console.log("Клик по box-3"); //
//   event.stopPropagation(); // отмена высплытия события
// });
// stopImmediatePropagation    // помимо отмены всплытия событий по дом-дереву, он еще отменяет срабатывание всех остальных обработчиков (если их несколько) на текущем элементе

// Фаза погружения события
// const firstBoxElement = document.querySelector(".box-1");
// const secondBoxElement = document.querySelector(".box-2");
// const thirdBoxElement = document.querySelector(".box-3");
// firstBoxElement.addEventListener("click", () => {
//   console.log("Клик по box-1");
// });
// secondBoxElement.addEventListener(
//   "click",
//   () => {
//     console.log("Клик по box-2");
//   },
//   true
// );
// thirdBoxElement.addEventListener("click", () => {
//   console.log("Клик по box-3");
// }); // Выдаст Клик по бокс-2, -3, -1
// // где true отрабатывает в первую очередь

//  33  // События: делегирование, поведение по умолчанию, генерация собственных событий

// const todoItemElements = document.querySelectorAll(".todo__item"); // найдем все элементы item и запишим в переменную
// // с помощью метода forEach проитерируемся по коллекции todoItemElements. На каждой итерации у нас есть доступ к конкретному дом-элем todoItem
// todoItemElements.forEach((todoItemElement) => {
//   todoItemElement.addEventListener("click", () => {
//     todoItemElement.classList.add("is-complited");
//   }); // добавляем обработчик событий клика
// });
// Данный код не приемлем !!!! Из-за большого кол-ва элементов в дом-дереве со своим обработчиком клика  !!!!!

// для этого нид Делегирование событий
// const onTodoItemClick = (todoItemElement) => {
//   // в аргументах ф-я будет ожидать дом-элем todoItemElement
//   todoItemElement.classList.add("is-complited");
// };
// // достаточно одного обраб событий на весь докум
// document.addEventListener("click", (event) => {
//   const todoItement = event.target.closest(".todo__item");

//   if (todoItement) {
//     // проверяем у event.target наличие класса todo__item через метод classList.contains, если всё ок, то вызываем ф-ю onTodoItemClick и передаем в аргументы event.target
//     onTodoItemClick(todoItement);
//   }
// });
// const addTodoItem = () => {
//   const todoListElement = document.querySelector(".todo__list");
//   const newTodoItemMarkup = `<li class="todo__item"><span>Todo item...</span></li>`;
//   todoListElement.insertAdjacentHTML("beforeend", newTodoItemMarkup);
// };
// addTodoItem();
// addTodoItem();
// addTodoItem();

// Некоторые события на оприд элем вынуждают браузер автоматом выполнять какое то действие. Например кнопка сабмит. Например хотим, чтобы клик на ссылку не инициировал переход на др страницу
// const linkElement = document.querySelector("a");
// const formElement = document.querySelector("form");
// linkElement.addEventListener("click", (event) => {
//   event.preventDefault(); // данный метод отменит действие браузера по умолчанию. страница не перезагр и не переходит по ссылки
// });
// formElement.addEventListener("submit", (event) => {
//   event.preventDefault();
// });

// Генерация событий. на примере сайта ламкова (лоадер при загрузки)
