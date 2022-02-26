import readlinesync from 'readline-sync';

const askTheQuestion = (userName) => {
    let result = true;
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlinesync.question('Your answer: ');
    if (num % 2 === 0) {
        switch (true) {
            case (answer !== 'yes'):
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
                console.log(`Let's try again, ${userName}!`);
                return result = false;
            default:
                console.log('Correct!');
        }
    }
    if (num % 2 !== 0) {
        switch (true) {
            case (answer !== 'no'):
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
                console.log(`Let's try again, ${userName}!`);
                return result = false;
            default:
                console.log('Correct!');
        }

    }
    return result;
}

export function gameBrainEven(userName) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let res = true;
    let counter = 1;
    while (res && counter <= 3) {
        (res) ? res = askTheQuestion(userName) : res = false;
        counter += 1;
    }
    if (res) {
        console.log(`Congratulations, ${userName}!`);
    }
}