export default function dataForGameBrainEven() {
  let correctAnswer = '';
  const questionData = Math.floor(Math.random() * 100);
  if (questionData % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [questionData, correctAnswer];
}
