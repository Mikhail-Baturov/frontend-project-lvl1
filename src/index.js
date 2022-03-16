import readlinesync from 'readline-sync';

export default function playGame(dataForGame) {
  console.log('Welcome to the Brain Games!');
  const userName = readlinesync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const roundsCount = 3;
  let answer = '';
  for (let counter = 1; counter <= roundsCount; counter += 1) {
    const [questionData, correctAnswer] = dataForGame();
    console.log(`Question: ${questionData}`);
    answer = readlinesync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
}
