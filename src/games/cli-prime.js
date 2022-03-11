export default function dataForGameBrainPrime() {
  let correctAnswer = '';
  const questionData = Math.floor(Math.random() * 100);
  let isPrime = true;
  if (questionData === 0 || questionData === 1) {
    isPrime = false;
  }
  let divisor = 2;
  while (isPrime && divisor <= questionData / 2) {
    if (questionData % divisor === 0) {
      isPrime = false;
    }
    divisor += 1;
  }
  if (isPrime) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [questionData, correctAnswer];
}
