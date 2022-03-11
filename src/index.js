import readlinesync from 'readline-sync';
import { greeting } from '../src/cli.js';

const playGame = (dataForGame) => {
  const userName = greeting();
  const numberOfGames = 3;
  let result = true;
  let counter = 1;
  while (result && counter <= numberOfGames) {
    const [questionData, correctAnswer] = dataForGame();
    console.log(`Question: ${questionData}`);
    let answer = readlinesync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      result = false;
    }
    counter += 1;
  }
  if (result) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export { playGame };
