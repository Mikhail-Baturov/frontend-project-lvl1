import playGame from '../index.js';
import { generateRandomNum } from './cli-progression.js';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const dataForGameBrainCalc = () => {
  const num1 = generateRandomNum(0, 9);
  const num2 = generateRandomNum(0, 9);
  const operators = ['+', '-', '*'];
  const operatorNumber = generateRandomNum(0, operators.length - 1);
  const operator = operators[operatorNumber];
  const correctAnswer = calculate(num1, num2, operator);
  const questionData = `${num1} ${operator} ${num2}`;
  return [questionData, String(correctAnswer)];
};

export default function GameBrainCalc() {
  playGame(dataForGameBrainCalc);
}
