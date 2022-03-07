export default function dataForGameBrainEven() {
  let correctAnswer = '';
  const questionData = Math.floor(Math.random() * 100);
  (questionData % 2 === 0) ? correctAnswer = 'yes' : correctAnswer = 'no';
  return [questionData, correctAnswer];
}
