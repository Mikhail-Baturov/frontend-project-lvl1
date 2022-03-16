
import playGame from '../index.js';

const randomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

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
  const num1 = randomNumber(0, 9);
  const num2 = randomNumber(0, 9);
  const operators = ['+', '-', '*'];
  const operatorNumber = randomNumber(0, operators.length - 1);
  const operator = operators[operatorNumber];
  const correctAnswer = calculate(num1, num2, operator);
  const questionData = `${num1} ${operator} ${num2}`;
  return [questionData, String(correctAnswer)];
};

export default function GameBrainCalc() {
  playGame(dataForGameBrainCalc);
}
