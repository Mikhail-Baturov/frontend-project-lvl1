const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default function dataForGameBrainEven() {
  const questionData = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(questionData);
  return [questionData, correctAnswer];
};
