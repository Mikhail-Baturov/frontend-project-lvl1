#!/usr/bin/env node
import greeting from '../src/cli.js';
import dataForGameBrainProgression from '../src/cli-progression.js';
import { playGame, finishGame } from '../src/index.js';

const userName = greeting();
console.log('What number is missing in the progression?');
const gameResult = playGame(dataForGameBrainProgression);
finishGame(userName, gameResult);
