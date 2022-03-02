#!/usr/bin/env node
import greeting from '../src/cli.js';
import gameBrainPrime from '../src/cli-prime.js';

const userName = greeting();
gameBrainPrime(userName);
