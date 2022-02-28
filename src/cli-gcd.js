import readlinesync from 'readline-sync';
import { finishGame, playGame } from './index.js';

function logicsGameBrainGcd() {
    let result = true;
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    let correctResult = 0;
    
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlinesync.question('Your answer: ');
    while (num1 != 0 && num2 != 0) {
        (num1 > num2) ? num1 = num1 % num2 : num2 = num2 % num1
    }
    correctResult = num1 + num2;
    if (Number(answer) === correctResult) {
        console.log('Correct!')
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.`);
        return result = false;
    }
    return result;
}

export function gameBrainGcd(userName) {
    console.log('Find the greatest common divisor of given numbers.');
    const gameResult = playGame(logicsGameBrainGcd);
    finishGame(userName, gameResult);
}