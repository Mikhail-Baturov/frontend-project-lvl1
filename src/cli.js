import readlinesync from 'readline-sync';

let userName = '';

export default function () {
  console.log('Welcome to the Brain Games!');
  userName = readlinesync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}
