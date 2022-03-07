import readlinesync from 'readline-sync';

const checkAnswer = (functionData) => {
  let result = true;
  const [questionData, correctAnswer] = functionData;
  console.log(`Question: ${questionData}`);
  let answer = readlinesync.question('Your answer: ');
  if (typeof (correctAnswer) === 'number') {
    answer = Number(answer);
  }
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    result = false;
  }
  return result;
};

const playGame = (nameofGame) => {
  const numberOfGames = 3;
  let result = true;
  let counter = 1;
  while (result && counter <= numberOfGames) {
    if (result) {
      result = checkAnswer(nameofGame());
    } else {
      result = false;
    }
    counter += 1;
  }
  if (result) {
    return 'win';
  }
  return 'lose';
};

const finishGame = (userName, result) => {
  if (result === 'win') {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export { playGame, finishGame };
