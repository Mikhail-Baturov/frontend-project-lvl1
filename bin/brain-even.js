#!/usr/bin/env node
import greeting from '../src/cli.js';
import dataForGameBrainEven from '../src/cli-even.js';
import { playGame, finishGame } from '../src/index.js';

const userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const gameResult = playGame(dataForGameBrainEven);
finishGame(userName, gameResult);
