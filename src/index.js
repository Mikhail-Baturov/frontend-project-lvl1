export function playGame(game) {
  const numberOfGames = 3;
  let res = true;
  let counter = 1;
  while (res && counter <= numberOfGames) {
    if (res) {
      res = game();
    } else {
      res = false;
    }
    counter += 1;
  }
  if (res) {
    return 'win';
  }
  return 'lose';
}

export function finishGame(userName, result) {
  if (result === 'win') {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
}
