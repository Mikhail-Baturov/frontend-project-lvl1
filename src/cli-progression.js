import readlinesync from 'readline-sync';
import { finishGame, playGame } from './index.js';

function logicsGameBrainProgression() {
  let result = true;
  const progressionLength = 5 + Math.floor(Math.random() * 5);
  const progression = [];
  const step = Math.floor(Math.random() * 10);
  const firstNum = Math.floor(Math.random() * 10);
  progression[0] = firstNum;
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(firstNum + i * step);
  }
  const j = Math.floor(Math.random() * progressionLength);
  const correctResult = progression[j];
  progression[j] = '..';
  const stringForConsole = progression.join(' ');
  console.log(`Question: ${stringForConsole}`);
  const answer = readlinesync.question('Your answer: ');
  if (Number(answer) === correctResult) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.`);
    result = false;
  }
  return result;
}

export default function gameBrainProgression(userName) {
  console.log('What number is missing in the progression?');
  const gameResult = playGame(logicsGameBrainProgression);
  finishGame(userName, gameResult);
}
