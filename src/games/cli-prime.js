import playGame from '../index.js';

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
  const questionData = Math.floor(Math.random() * 100);
  let correctAnswer = '';
  (isPrime(questionData)) ? correctAnswer = 'yes' : correctAnswer = 'no';
  return [questionData, correctAnswer];
};

export default function GameBrainPrime() {
  playGame(dataForGameBrainPrime);
}
