import readlinesync from 'readline-sync';

export default function greeting() {
  console.log('Welcome to the Brain Games!');
  const userName = readlinesync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}
