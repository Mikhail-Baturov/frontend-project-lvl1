#!/usr/bin/env node
import greeting from '../src/cli.js';
import dataForGameBrainPrime from '../src/cli-prime.js';
import { playGame, finishGame } from '../src/index.js';

const userName = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const gameResult = playGame(dataForGameBrainPrime);
finishGame(userName, gameResult);
