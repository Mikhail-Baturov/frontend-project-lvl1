export default function dataForGameBrainGcd() {
  let num1 = Math.floor(Math.random() * 100);
  let num2 = Math.floor(Math.random() * 100);
  const questionData = `${num1} ${num2}`;
  let correctAnswer = 0;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  correctAnswer = num1 + num2;
  return [questionData, correctAnswer];
}
