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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dataQuestions: () => (/* binding */ dataQuestions)\n/* harmony export */ });\nconst dataQuestions = [{\n  q: 'Что такое операционная система?',\n  ans: ['Это просто программа на компьютере, как и другие - Word или Chrome', 'Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный', 'Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем', 'Нет такого понятия, есть понятие \"файловая система\"'],\n  corr: 3\n}, {\n  q: 'Является ли Android операционной системой?',\n  ans: ['Да, это такая же ОС, как и другие, просто для мобильных девайсов', 'Нет, операционные системы бывают только для ПК', 'Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные', 'Это домашняя страничка в настройках вашего браузера'],\n  corr: 1\n}, {\n  q: 'Что такое процессор компьютера?',\n  ans: ['Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки', 'Это общее название всех комплектующих компьютера', 'Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств', 'Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц'],\n  corr: 3\n}, {\n  q: 'Какие бывают разрядности у современных процессоров?',\n  ans: ['32 и 64 бита', '12 и 32 бита', '15 и 32 бита', '86 и 64 бита'],\n  corr: 1\n}, {\n  q: 'Какой тип процессора чаще всего используют мобильные девайсы?',\n  ans: ['iOS использует Intel, остальные используют AMD', 'Чаще всего используют Intel', 'Чаще всего используют AMD', 'Чаще всего используют ARM'],\n  corr: 4\n}, {\n  q: 'Для чего компьютеру нужна RAM?',\n  ans: ['Для быстрого доступа к данным', 'Для долгосрочного хранения данных', 'Для правильной фрагментации памяти', 'Для дефрагментации данных'],\n  corr: 1\n}, {\n  q: 'Чем отличается HDD от SSD?',\n  ans: ['HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее', 'HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее', 'SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее', 'SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстре'],\n  corr: 4\n}, {\n  q: 'Как отличаются между собой USB?',\n  ans: ['Бывают только USB 2.0 и 3.2', 'Бывают только micro-USB и mini-USB', 'USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2)', 'USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)'],\n  corr: 4\n}, {\n  q: 'Какой файловой системы не существует?',\n  ans: ['Fat', 'NTFS', 'APFS', 'BolSFS'],\n  corr: 4\n}];\n\n//# sourceURL=webpack://webpackbaseconfig/./src/data.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ \"./src/data.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\n\n\nconst quiz = document.querySelector('.quiz');\nconst progressBar = document.querySelector('.progress');\nconst resultBtn = document.querySelector('.result__btn');\nconst questions = [..._data__WEBPACK_IMPORTED_MODULE_0__.dataQuestions];\nconst results = [];\nconst totalCountSpan = document.querySelector('.progress__end');\nfunction progress() {\n  const readyCountSpan = document.querySelector('.progress__ready');\n  const progressIndicator = document.querySelector('.progress__indicator');\n  const progressLabel = document.querySelector('.progress__label');\n  readyCountSpan.innerHTML = results.length;\n  progressLabel.innerHTML = `Вы ответили на ${readyCountSpan.innerHTML} ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.pluralize)(readyCountSpan.innerHTML, ['вопрос', 'вопроса', 'вопросов'])} из ${totalCountSpan.innerHTML}`;\n  let progressIndicatorWidth = `${Number(readyCountSpan.innerHTML) / Number(totalCountSpan.innerHTML) * 100}%`;\n  progressIndicator.style.width = progressIndicatorWidth;\n}\nfunction createQuestion(text) {\n  const question = document.createElement('h2');\n  question.classList.add('quiz__question');\n  quiz.append(question);\n  question.innerHTML = text;\n}\nfunction createAnswer(id, text, q, correctAnswerId) {\n  const quizItem = document.createElement('fieldset');\n  quizItem.classList.add('quiz__block');\n  quiz.append(quizItem);\n  const quizRadio = document.createElement('input');\n  quizRadio.classList.add('quiz__radio');\n  quizRadio.classList.add('visually-hidden');\n  quizRadio.setAttribute('type', 'radio');\n  quizRadio.setAttribute('name', 'answer');\n  quizRadio.setAttribute('id', id);\n  quizItem.append(quizRadio);\n  const answer = document.createElement('label');\n  answer.classList.add('quiz__answer');\n  answer.setAttribute('for', id);\n  answer.innerHTML = text;\n  quizItem.append(answer);\n  quizRadio.addEventListener('input', () => {\n    results.push({\n      question: q,\n      answer: text,\n      correct: id === correctAnswerId\n    });\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(quiz);\n    askQuestion();\n    progress();\n    quiz.classList.remove('animated-translate');\n    quiz.classList.add('animated');\n  });\n  quizRadio.addEventListener('click', () => {\n    quiz.classList.remove('animated');\n  });\n}\nfunction askQuestion() {\n  const title = document.querySelector('.title');\n  const result = document.querySelector('.result');\n  let q = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomElement)(questions);\n  if (q) {\n    const correctAnswer = q.ans[q.corr - 1];\n    createQuestion(q.q);\n    let ans = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomElement)(q.ans);\n    let i = 1;\n    let correctAnswerId = null;\n    while (ans) {\n      if (correctAnswer === ans) {\n        correctAnswerId = 'ans' + i;\n      }\n      createAnswer('ans' + i, ans, q.q, correctAnswerId);\n      i++;\n      ans = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomElement)(q.ans);\n    }\n  } else {\n    result.style.display = 'flex';\n    createResults(results);\n    quiz.style.display = 'none';\n    progressBar.style.display = 'none';\n    title.style.display = 'none';\n  }\n}\nfunction createResultsItem(question, answer, correct) {\n  const resultsList = document.querySelector('.result__list');\n  const resultItem = document.createElement('li');\n  resultItem.classList.add('result__item');\n  correct ? resultItem.classList.add('result__item_correct') : resultItem.classList.add('result__item_incorrect');\n  resultsList.append(resultItem);\n  const resultQuestion = document.createElement('h3');\n  resultQuestion.classList.add('result__question');\n  resultQuestion.innerHTML = question;\n  resultItem.append(resultQuestion);\n  const resultAnswer = document.createElement('p');\n  resultAnswer.classList.add('result__answer');\n  resultAnswer.innerHTML = answer;\n  resultItem.append(resultAnswer);\n}\nfunction createResults(results) {\n  const resultSectionTitle = document.querySelector('.result__title');\n  const resultSectionDescription = document.querySelector('.result__description');\n  let allCorrect = true;\n  let allIncorrect = true;\n  let correctCount = 0;\n  results.forEach(answer => {\n    if (answer.correct) {\n      allIncorrect = false;\n      correctCount++;\n    } else {\n      allCorrect = false;\n    }\n    createResultsItem(answer.question, answer.answer, answer.correct);\n  });\n  if (allCorrect) {\n    resultSectionTitle.innerHTML = 'Поздравляем!';\n    resultSectionDescription.innerHTML = 'Вы правильно ответили на все вопросы. <br /> Вы действительно отлично разбираетесь в IT. ';\n    resultBtn.style.display = 'none';\n  } else if (allIncorrect) {\n    resultSectionTitle.innerHTML = 'Упс :(';\n    resultSectionDescription.innerHTML = 'Вы неправильно ответили на все вопросы.<br /> Нужно подучить теорию.';\n  } else {\n    resultSectionTitle.innerHTML = 'Хороший результат!';\n    resultSectionDescription.innerHTML = `Вы ответили правильно на ${correctCount + ' ' + (0,_utils__WEBPACK_IMPORTED_MODULE_1__.pluralize)(correctCount, ['вопрос', 'вопроса', 'вопросов'])}. <br /> Так держать!`;\n  }\n}\ndocument.addEventListener('DOMContentLoaded', () => {\n  quiz.classList.add('animated-translate');\n  totalCountSpan.innerHTML = [..._data__WEBPACK_IMPORTED_MODULE_0__.dataQuestions].length;\n  askQuestion();\n});\nresultBtn.addEventListener('click', () => {\n  window.location.reload();\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/quiz.js?");

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