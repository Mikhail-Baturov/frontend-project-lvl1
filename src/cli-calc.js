import readlinesync from 'readline-sync';
import { finishGame, playGame } from './index.js';

function logicsGameBrainCalc() {
    let result = true;
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operators = ['+', '-', '*'];
    const i = Math.floor(Math.random() * 3);
    const operator = operators[i];
    let correctResult = 0;
    switch (operator) {
        case '+':
            correctResult = num1 + num2;
            break;
        case '-':
            correctResult = num1 - num2;
            break;
        case '*':
            correctResult = num1 * num2;
            break;
    }
    console.log(`Question: ${num1} ${operator} ${num2}`);
    const answer = readlinesync.question('Your answer: ');
    if (Number(answer) === correctResult) {
        console.log('Correct!')
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.`);
        return result = false;
    }
    return result;
}

export function gameBrainCalc(userName) {
    console.log('What is the result of the expression?');
    const gameResult = playGame(logicsGameBrainCalc);
    finishGame(userName, gameResult);
}