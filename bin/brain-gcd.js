#!/usr/bin/env node
import greeting from '../src/cli.js';
import gameBrainGcd from '../src/cli-gcd.js';

const userName = greeting();
gameBrainGcd(userName);
