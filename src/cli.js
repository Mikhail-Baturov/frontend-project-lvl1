import readlinesync from 'readline-sync';

export default function greeting() {
  let userName = '';
  console.log('Welcome to the Brain Games!');
  userName = readlinesync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}
