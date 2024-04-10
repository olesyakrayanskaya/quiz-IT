'use strict';
import { dataQuestions } from '../data';
import { getRandomElement, removeAllChildNodes, pluralize } from './utils';

const quiz = document.querySelector('.quiz');
const result = document.querySelector('.result');
const progressBar = document.querySelector('.progress');
const title = document.querySelector('.title');

const resultSectionTitle = document.querySelector('.result__title');
const resultSectionDescription = document.querySelector('.result__description');
const resultsList = document.querySelector('.result__list');
const resultBtn = document.querySelector('.result__btn');

const totalCountSpan = document.querySelector('.progress__end');
const readyCountSpan = document.querySelector('.progress__ready');
const progressIndicator = document.querySelector('.progress__indicator');
const progressLabel = document.querySelector('.progress__label');

const questions = [...dataQuestions];
const resultArr = [];

function progress() {
    totalCountSpan.innerHTML = [...dataQuestions].length;
    readyCountSpan.innerHTML = resultArr.length;
    progressLabel.innerHTML = `Вы ответили на ${
        readyCountSpan.innerHTML
    } ${pluralize(readyCountSpan.innerHTML, [
        'вопрос',
        'вопроса',
        'вопросов',
    ])} из ${totalCountSpan.innerHTML}`;
    let progressIndicatorWidth = `${(Number(readyCountSpan.innerHTML) / Number(totalCountSpan.innerHTML)) * 100}%`;
    progressIndicator.style.width = progressIndicatorWidth
}

function createQuestion(text) {
    const question = document.createElement('h2');
    question.classList.add('quiz__question');
    quiz.append(question);
    question.innerHTML = text;
}

function createAnswer(id, text, q, correctAnswerId) {
    const quizItem = document.createElement('fieldset');
    quizItem.classList.add('quiz__block');
    quiz.append(quizItem);
    const quizRadio = document.createElement('input');
    quizRadio.classList.add('quiz__radio');
    quizRadio.classList.add('visually-hidden');
    quizRadio.setAttribute('type', 'radio');
    quizRadio.setAttribute('name', 'answer');
    quizRadio.setAttribute('id', id);
    quizItem.append(quizRadio);
    const answer = document.createElement('label');
    answer.classList.add('quiz__answer');
    answer.setAttribute('for', id);
    answer.innerHTML = text;
    quizItem.append(answer);
    quizRadio.addEventListener('input', () => {
        resultArr.push({
            question: q,
            answer: text,
            correct: id === correctAnswerId,
        });
        removeAllChildNodes(quiz);
        askQuestion();
        progress();
    });
}

function askQuestion() {
    let q = getRandomElement(questions);
    if (q) {
        const correctAnswer = q.ans[q.corr - 1];
        createQuestion(q.q);
        let ans = getRandomElement(q.ans);
        let i = 1;
        let correctAnswerId = null;
        while (ans) {
            if (correctAnswer === ans) {
                correctAnswerId = 'ans' + i;
            }
            createAnswer('ans' + i, ans, q.q, correctAnswerId);
            i++;
            ans = getRandomElement(q.ans);
        }
    } else {
        result.style.display = 'flex';
        createResults(resultArr);
        quiz.style.display = 'none';
        progressBar.style.display = 'none';
        title.style.display = 'none';
    }
}

function createResultsItem(question, answer, correct) {
    const resultItem = document.createElement('li');
    resultItem.classList.add('result__item');
    correct
        ? resultItem.classList.add('result__item_correct')
        : resultItem.classList.add('result__item_incorrect');
    resultsList.append(resultItem);
    const resultQuestion = document.createElement('h3');
    resultQuestion.classList.add('result__question');
    resultQuestion.innerHTML = question;
    resultItem.append(resultQuestion);
    const resultAnswer = document.createElement('p');
    resultAnswer.classList.add('result__answer');
    resultAnswer.innerHTML = answer;
    resultItem.append(resultAnswer);
}

function createResults(resultArr) {
    let allCorrect = true;
    let allIncorrect = true;
    let correctCount = 0;
    resultArr.forEach((answer) => {
        if (answer.correct) {
            allIncorrect = false;
            correctCount++;
        } else {
            allCorrect = false;
        }
        createResultsItem(answer.question, answer.answer, answer.correct);
    });
    if (allCorrect) {
        resultSectionTitle.innerHTML = 'Поздравляем!';
        resultSectionDescription.innerHTML =
            'Вы правильно ответили на все вопросы. <br /> Вы действительно отлично разбираетесь в IT. ';
        resultBtn.style.display = 'none';
    } else if (allIncorrect) {
        resultSectionTitle.innerHTML = 'Упс :(';
        resultSectionDescription.innerHTML =
            'Вы неправильно ответили на все вопросы.<br /> Нужно подучить теорию.';
    } else {
        resultSectionTitle.innerHTML = 'Хороший результат!';
        resultSectionDescription.innerHTML = `Вы ответили правильно на ${
            correctCount +
            ' ' +
            pluralize(correctCount, ['вопрос', 'вопроса', 'вопросов'])
        }. <br /> Так держать!`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    askQuestion();
});

resultBtn.addEventListener('click', () => {
    window.location.reload();
});
