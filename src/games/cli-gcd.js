const findGCD = (num1, num2) => {
  const number1 = num1;
  const number2 = num2;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
};

export default function dataForGameBrainGcd() {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const questionData = `${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2);
  return [questionData, String(correctAnswer)];
}
