import playGame from '../index.js';
import { generateRandomNum } from './cli-progression.js';

const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return false;
  }
  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

const dataForGameBrainPrime = () => {
  const questionData = generateRandomNum(0, 100);
  let correctAnswer = '';
  if (isPrime(questionData)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [questionData, correctAnswer];
};

export default function GameBrainPrime() {
  playGame(dataForGameBrainPrime);
}
