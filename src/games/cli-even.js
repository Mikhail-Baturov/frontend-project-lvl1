import playGame from '../index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
return false;
};

const dataForGameBrainEven = () => {
  const questionData = Math.floor(Math.random() * 100);
  let correctAnswer = '';
  (isEven(questionData)) ? correctAnswer = 'yes': correctAnswer = 'no';
  return [questionData, correctAnswer];
};

export default function GameBrainEven() {
  playGame(dataForGameBrainEven);
}
