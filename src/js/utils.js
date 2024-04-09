function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomElement(elements) {
    let randomIndex = getRandomInteger(elements.length);
    let randomElement = elements[randomIndex];
    elements.splice(randomIndex, 1);
    return randomElement;
}

export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export function pluralize(n, textForms) {
    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) {
        return textForms[2];
    }
    if (n1 > 1 && n1 < 5) {
        return textForms[1];
    }
    if (n1 === 1) {
        return textForms[0];
    }
    return textForms[2];
}
