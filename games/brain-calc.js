#!/usr/bin/env node
import { greeting } from '../src/cli.js';
import { gameBrainCalc } from '../src/cli-calc.js';

const userName = greeting();
gameBrainCalc(userName);
