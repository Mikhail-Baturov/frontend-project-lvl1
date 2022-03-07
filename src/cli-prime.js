export default function dataForGameBrainPrime() {
  let correctAnswer = '';
  const questionData = Math.floor(Math.random() * 100);
  let divisor = 2;
  let isPrime = true;
  if (questionData === 0 || questionData === 1) {
    isPrime = false;
  }
  while (isPrime && divisor <= questionData / 2) {
    if (questionData % divisor === 0) {
      isPrime = false;
    }
    divisor += 1;
  }
  (isPrime) ? correctAnswer = 'yes' : correctAnswer = 'no';
  return [questionData, correctAnswer];
}
