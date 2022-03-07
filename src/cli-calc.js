export default function dataForGameBrainCalc() {
  let result = true;
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operators = ['+', '-', '*'];
  const i = Math.floor(Math.random() * 3);
  const operator = operators[i];
  let correctAnswer = 0;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      break;
  }
  const questionData = `${num1} ${operator} ${num2}`
  return [questionData, correctAnswer];
}
