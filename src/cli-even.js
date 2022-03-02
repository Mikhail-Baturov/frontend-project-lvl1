import readlinesync from 'readline-sync';
import { finishGame, playGame } from './index.js';

function logicsGameBrainEven() {
    let result = true;
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlinesync.question('Your answer: ');
    if (num % 2 === 0) {
        switch (true) {
            case (answer !== 'yes'):
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
                return result = false;
            default:
                console.log('Correct!');
        }
    }
    if (num % 2 !== 0) {
        switch (true) {
            case (answer !== 'no'):
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
                return result = false;
            default:
                console.log('Correct!');
        }

    }
    return result;
}

export function gameBrainEven(userName) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const gameResult = playGame(logicsGameBrainEven);
    finishGame(userName, gameResult);
}