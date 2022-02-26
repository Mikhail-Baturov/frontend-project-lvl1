export function playGame(game) {
    const numberOfGames = 3;
    let res = true;
    let counter = 1;
    while (res && counter <= numberOfGames) {
        (res) ? res = game() : res = false;
        counter += 1;
    }
    if (res) {
        return 'win'
    } else {
        return 'lose'
    }
};

export function finishGame(userName, result) {
    if (result === 'win') {
        console.log(`Congratulations, ${userName}!`);
    } else {
        console.log(`Let's try again, ${userName}!`);
    }
};