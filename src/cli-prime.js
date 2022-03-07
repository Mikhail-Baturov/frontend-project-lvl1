export default function dataForGameBrainPrime() {
  let correctAnswer = '';
  const questionData = Math.floor(Math.random() * 100);
  let isPrime = true;
  let divisor = 2;
  while (isPrime && divisor <= questionData / 2) {
    if (questionData % divisor === 0) {
      isPrime = false;
    }
    divisor += 1;
  }
  (isPrime) ? correctAnswer = 'yes' : correctAnswer = 'no';
  return [questionData, correctAnswer];
}
