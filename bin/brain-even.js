#!/usr/bin/env node
import { greeting } from '../src/cli.js';
import { gameBrainEven } from '../src/cli-even.js';

const userName = greeting();
gameBrainEven(userName);