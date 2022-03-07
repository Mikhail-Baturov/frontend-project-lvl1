export default function dataForGameBrainProgression() {
  const progressionLength = 5 + Math.floor(Math.random() * 5);
  const progression = [];
  const step = Math.floor(Math.random() * 10);
  const firstNum = Math.floor(Math.random() * 10);
  progression[0] = firstNum;
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(firstNum + i * step);
  }
  const j = Math.floor(Math.random() * progressionLength);
  const correctAnswer = progression[j];
  progression[j] = '..';
  const questionData = progression.join(' ');
  return [questionData, correctAnswer];
}
