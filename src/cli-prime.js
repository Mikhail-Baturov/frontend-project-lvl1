import readlinesync from 'readline-sync';
import { finishGame, playGame } from './index.js';

function logicsGameBrainPrime() {
  let result = true;
  const num = Math.floor(Math.random() * 100);
  console.log(`Question: ${num}`);
  const answer = readlinesync.question('Your answer: ');
  let isPrime = true;
  let divisor = 2;
  while (isPrime && divisor <= num / 2) {
    if (num % divisor === 0) {
      isPrime = false;
    }
    divisor += 1;
  }
  if (isPrime) {
    switch (true) {
      case (answer !== 'yes'):
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
        return result = false;
      default:
        console.log('Correct!');
    }
  }
  if (!isPrime) {
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

export function gameBrainPrime(userName) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const gameResult = playGame(logicsGameBrainPrime);
  finishGame(userName, gameResult);
}