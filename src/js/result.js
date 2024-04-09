const resultsList = document.querySelector('.result__list');

export function createResultsItem(question, answer, correct) {
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
