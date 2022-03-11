import { randomNumber } from '../cli.js';

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

export default function dataForGameBrainCalc() {
  const num1 = randomNumber(0, 9);
  const num2 = randomNumber(0, 9);
  const operators = ['+', '-', '*'];
  const operatorNumber = randomNumber(0, 2);
  const operator = operators[operatorNumber];
  const correctAnswer = calculate(num1, num2, operator);
  const questionData = `${num1} ${operator} ${num2}`;
  return [questionData, String(correctAnswer)];
}
