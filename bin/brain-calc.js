#!/usr/bin/env node
import greeting from '../src/cli.js';
import dataForGameBrainCalc from '../src/cli-calc.js';
import { playGame, finishGame } from '../src/index.js';

const userName = greeting();
console.log('What is the result of the expression?');
const gameResult = playGame(dataForGameBrainCalc);
finishGame(userName, gameResult);
