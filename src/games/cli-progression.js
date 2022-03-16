import playGame from '../index.js';

const makeProgression = (firstNum, step, progressionLength) => {
  const progression = [];
  for (let elemNumber = 0; elemNumber < progressionLength; elemNumber += 1) {
    progression.push(firstNum + elemNumber * step);
  }
  return progression;
};

const dataForGameBrainProgression = () => {
  const firstNum = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10);
  const progressionLength = 5 + Math.floor(Math.random() * 5);
  const progression = makeProgression(firstNum, step, progressionLength);
  const j = Math.floor(Math.random() * progressionLength);
  const correctAnswer = progression[j];
  progression[j] = '..';
  const questionData = progression.join(' ');
  return [questionData, String(correctAnswer)];
};

export default function BrainProgression() {
  playGame(dataForGameBrainProgression);
}
