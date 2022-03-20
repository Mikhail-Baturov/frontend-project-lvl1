import playGame from '../index.js';

const makeProgression = (firstNum, step, progressionLength) => {
  const progression = [];
  for (let elemNumber = 0; elemNumber < progressionLength; elemNumber += 1) {
    progression.push(firstNum + elemNumber * step);
  }
  return progression;
};

const generateRandomNum = (num1, num2) => num1 + Math.floor(Math.random() * (num2 - num1));

const dataForGameBrainProgression = () => {
  const firstNum = generateRandomNum(0, 10);
  const step = generateRandomNum(0, 10);
  const progressionLength = generateRandomNum(5, 10);
  const progression = makeProgression(firstNum, step, progressionLength);
  const indexOfHiddenNum = Math.floor(Math.random() * progressionLength);
  const correctAnswer = progression[indexOfHiddenNum];
  progression[indexOfHiddenNum] = '..';
  const questionData = progression.join(' ');
  return [questionData, String(correctAnswer)];
};

export default function BrainProgression() {
  playGame(dataForGameBrainProgression);
}
