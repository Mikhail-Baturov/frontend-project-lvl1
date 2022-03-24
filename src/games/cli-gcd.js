import playGame from '../index.js';
import { generateRandomNum } from './cli-progression.js'

const findGCD = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
};

const dataForGameBrainGcd = () => {
  const num1 = generateRandomNum(0, 100);
  const num2 = generateRandomNum(0, 100);
  const questionData = `${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2);
  return [questionData, String(correctAnswer)];
};

export default function GameBrainGcd() {
  playGame(dataForGameBrainGcd);
}
