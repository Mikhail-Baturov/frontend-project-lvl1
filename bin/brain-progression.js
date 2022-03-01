#!/usr/bin/env node
import { greeting } from '../src/cli.js';
import { gameBrainProgression } from '../src/cli-progression.js';

const userName = greeting();
gameBrainProgression(userName);