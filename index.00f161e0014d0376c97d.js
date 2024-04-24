/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dataQuestions: () => (/* binding */ dataQuestions)\n/* harmony export */ });\nconst dataQuestions = [{\n  q: 'Какого типа данных нет в JS?',\n  ans: ['undefined', 'symbol', 'integer', 'object'],\n  corr: 3\n}, {\n  q: 'Как расшифровывается HTTP?',\n  ans: ['Протокол передачи гипертекста', 'Протокол частичной передачи текста', 'Личная передача гипертекста', 'Практичная передача части текста'],\n  corr: 1\n}, {\n  q: 'Что делает метод stopPropagation?',\n  ans: ['Отменяет действие события браузера', 'Останавливает цепочку вызова событий для последующих слушателей DOM элемента', 'Прекращает дальнейшую передачу текущего события', 'Вызывает событие'],\n  corr: 3\n}, {\n  q: 'Отличие sessionStorage от LocalStorage?',\n  ans: ['localStorage позволяет хранить больший объем данных чем sessionStorage', 'sessionStorage отправляет данные на сервер при каждом запросе', 'localStorage может использоваться для хранения файлов', 'область видимости localStorage распространяется на все вкладки страницы, sessionStorage только на одну'],\n  corr: 1\n}, {\n  q: 'Чему равняется контекст в момент вызова функции через оператор new?',\n  ans: ['Первому переданному аргументу', 'Последнему переданному аргументу', 'Контекст не определен', 'Пустому новому объекту'],\n  corr: 4\n}, {\n  q: 'Что такое рекурсия?',\n  ans: ['Функция, которая вызывает саму себя', 'Абстрактный тип данных, представляющий собой список элементов, организованных по принципу LIFO', 'Абстрактный тип данных, представляющий собой список элементов, организованных по принципу FIFO', 'Структура данных, состоящая из элементов, содержащих помимо собственных данных ссылки на следующий и/или предыдущий элемент списка'],\n  corr: 1\n}, {\n  q: 'Что делает метод event.preventDefault()?',\n  ans: ['Останавливает цепочку вызова событий для последующих слушателей DOM элемента', 'Удаляет обработчик события', 'Вызывает событие', 'Отменяет действие браузера'],\n  corr: 4\n}, {\n  q: 'Каких структур данных нет в JS?',\n  ans: ['Array', 'Map', 'Set', 'List'],\n  corr: 4\n}, {\n  q: 'Что такое Promise в JS?',\n  ans: ['Функция для выполнения асинхронных операций: работой с API, базами данных, чтения файлов', 'Метод сетевых запросов', 'Тип данных JavaScript', 'Специальный объект JavaScript, который используется для написания и обработки асинхронного кода'],\n  corr: 4\n}];\n\n//# sourceURL=webpack://webpackbaseconfig/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/main.scss */ \"./src/main.scss\");\n/* harmony import */ var _src_js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/js/utils */ \"./src/js/utils.js\");\n/* harmony import */ var _src_js_quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/js/quiz */ \"./src/js/quiz.js\");\n\n\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/index.js?");

/***/ }),

/***/ "./src/js/quiz.js":
/*!************************!*\
  !*** ./src/js/quiz.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ \"./src/data.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\n\n\nconst quiz = document.querySelector('.quiz');\nconst progressBar = document.querySelector('.progress');\nconst resultBtn = document.querySelector('.result__btn');\nconst questions = [..._data__WEBPACK_IMPORTED_MODULE_0__.dataQuestions];\nconst results = [];\nconst totalCountSpan = document.querySelector('.progress__end');\nfunction progress() {\n  const readyCountSpan = document.querySelector('.progress__ready');\n  const progressIndicator = document.querySelector('.progress__indicator');\n  const progressLabel = document.querySelector('.progress__label');\n  readyCountSpan.innerHTML = results.length;\n  progressLabel.innerHTML = `Вы ответили на ${readyCountSpan.innerHTML} ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.pluralize)(readyCountSpan.innerHTML, ['вопрос', 'вопроса', 'вопросов'])} из ${totalCountSpan.innerHTML}`;\n  let progressIndicatorWidth = `${Number(readyCountSpan.innerHTML) / Number(totalCountSpan.innerHTML) * 100}%`;\n  progressIndicator.style.width = progressIndicatorWidth;\n}\nfunction createQuestion(text) {\n  const question = document.createElement('h2');\n  question.classList.add('quiz__question');\n  quiz.append(question);\n  question.innerHTML = text;\n}\nfunction createAnswer(id, text, q, correctAnswerId) {\n  const quizItem = document.createElement('fieldset');\n  quizItem.classList.add('quiz__block');\n  quiz.append(quizItem);\n  const quizRadio = document.createElement('input');\n  quizRadio.classList.add('quiz__radio');\n  quizRadio.classList.add('visually-hidden');\n  quizRadio.setAttribute('type', 'radio');\n  quizRadio.setAttribute('name', 'answer');\n  quizRadio.setAttribute('id', id);\n  quizItem.append(quizRadio);\n  const answer = document.createElement('label');\n  answer.classList.add('quiz__answer');\n  answer.setAttribute('for', id);\n  answer.innerHTML = text;\n  quizItem.append(answer);\n  quizRadio.addEventListener('input', () => {\n    results.push({\n      question: q,\n      answer: text,\n      correct: id === correctAnswerId\n    });\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(quiz);\n    askQuestion();\n    progress();\n    quiz.classList.remove('animated-translate');\n    quiz.classList.add('animated');\n  });\n  quizRadio.addEventListener('click', () => {\n    quiz.classList.remove('animated');\n  });\n}\nfunction askQuestion() {\n  const title = document.querySelector('.title');\n  const result = document.querySelector('.result');\n  let q = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomElement)(questions);\n  if (q) {\n    const correctAnswer = q.ans[q.corr - 1];\n    createQuestion(q.q);\n    let ans = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomElement)(q.ans);\n    let i = 1;\n    let correctAnswerId = null;\n    while (ans) {\n      if (correctAnswer === ans) {\n        correctAnswerId = 'ans' + i;\n      }\n      createAnswer('ans' + i, ans, q.q, correctAnswerId);\n      i++;\n      ans = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomElement)(q.ans);\n    }\n  } else {\n    result.style.display = 'flex';\n    createResults(results);\n    quiz.style.display = 'none';\n    progressBar.style.display = 'none';\n    title.style.display = 'none';\n  }\n}\nfunction createResultsItem(question, answer, correct) {\n  const resultsList = document.querySelector('.result__list');\n  const resultItem = document.createElement('li');\n  resultItem.classList.add('result__item');\n  correct ? resultItem.classList.add('result__item_correct') : resultItem.classList.add('result__item_incorrect');\n  resultsList.append(resultItem);\n  const resultQuestion = document.createElement('h3');\n  resultQuestion.classList.add('result__question');\n  resultQuestion.innerHTML = question;\n  resultItem.append(resultQuestion);\n  const resultAnswer = document.createElement('p');\n  resultAnswer.classList.add('result__answer');\n  resultAnswer.innerHTML = answer;\n  resultItem.append(resultAnswer);\n}\nfunction createResults(results) {\n  const resultSectionTitle = document.querySelector('.result__title');\n  const resultSectionDescription = document.querySelector('.result__description');\n  let allCorrect = true;\n  let allIncorrect = true;\n  let correctCount = 0;\n  results.forEach(answer => {\n    if (answer.correct) {\n      allIncorrect = false;\n      correctCount++;\n    } else {\n      allCorrect = false;\n    }\n    createResultsItem(answer.question, answer.answer, answer.correct);\n  });\n  if (allCorrect) {\n    resultSectionTitle.innerHTML = 'Поздравляем!';\n    resultSectionDescription.innerHTML = 'Вы правильно ответили на все вопросы. <br /> Вы действительно отлично разбираетесь в JS. ';\n    resultBtn.style.display = 'none';\n  } else if (allIncorrect) {\n    resultSectionTitle.innerHTML = 'Упс :(';\n    resultSectionDescription.innerHTML = 'Вы неправильно ответили на все вопросы.<br /> Нужно подучить теорию.';\n  } else {\n    resultSectionTitle.innerHTML = 'Хороший результат!';\n    resultSectionDescription.innerHTML = `Вы ответили правильно на ${correctCount + ' ' + (0,_utils__WEBPACK_IMPORTED_MODULE_1__.pluralize)(correctCount, ['вопрос', 'вопроса', 'вопросов'])}. <br /> Так держать!`;\n  }\n}\ndocument.addEventListener('DOMContentLoaded', () => {\n  quiz.classList.add('animated-translate');\n  totalCountSpan.innerHTML = [..._data__WEBPACK_IMPORTED_MODULE_0__.dataQuestions].length;\n  askQuestion();\n});\nresultBtn.addEventListener('click', () => {\n  window.location.reload();\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/quiz.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRandomElement: () => (/* binding */ getRandomElement),\n/* harmony export */   pluralize: () => (/* binding */ pluralize),\n/* harmony export */   removeAllChildNodes: () => (/* binding */ removeAllChildNodes)\n/* harmony export */ });\nfunction getRandomInteger(max) {\n  return Math.floor(Math.random() * max);\n}\nfunction getRandomElement(elements) {\n  let randomIndex = getRandomInteger(elements.length);\n  let randomElement = elements[randomIndex];\n  elements.splice(randomIndex, 1);\n  return randomElement;\n}\nfunction removeAllChildNodes(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\nfunction pluralize(n, textForms) {\n  n = Math.abs(n) % 100;\n  let n1 = n % 10;\n  if (n > 10 && n < 20) {\n    return textForms[2];\n  }\n  if (n1 > 1 && n1 < 5) {\n    return textForms[1];\n  }\n  if (n1 === 1) {\n    return textForms[0];\n  }\n  return textForms[2];\n}\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/utils.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;