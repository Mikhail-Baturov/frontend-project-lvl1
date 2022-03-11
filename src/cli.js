import readlinesync from 'readline-sync';

const greeting = () => {
  let userName = '';
  console.log('Welcome to the Brain Games!');
  userName = readlinesync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const randomNumber = (min, max) => {
return Math.floor(min + Math.random() * (max - min + 1));
};

export { greeting, randomNumber };
