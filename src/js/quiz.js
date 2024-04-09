'use strict';
import { dataQuestions } from '../data';
import { getRandomElement, removeAllChildNodes, pluralize } from './utils';
import { createResultsItem } from './result';

const quiz = document.querySelector('.quiz');
const result = document.querySelector('.result');
const progressBar = document.querySelector('.progress');
const title = document.querySelector('.title');

const resultSectionTitle = document.querySelector('.result__title');
const resultSectionDescription = document.querySelector('.result__description');
const resultBtn = document.querySelector('.result__btn');

const questions = [...dataQuestions];
const resultArr = [];

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
