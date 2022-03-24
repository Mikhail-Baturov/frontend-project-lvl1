import playGame from '../index.js';
import { generateRandomNum } from './cli-progression.js'

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const dataForGameBrainEven = () => {
  const questionData = generateRandomNum(0, 100);
  let correctAnswer = '';
  if (isEven(questionData)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [questionData, correctAnswer];
};

export default function GameBrainEven() {
  playGame(dataForGameBrainEven);
}
