#!/usr/bin/env node
import greeting from '../src/cli.js';
import dataForGameBrainGcd from '../src/cli-gcd.js';
import { playGame, finishGame } from '../src/index.js';

const userName = greeting();
console.log('Find the greatest common divisor of given numbers.');
const gameResult = playGame(dataForGameBrainGcd);
finishGame(userName, gameResult);
