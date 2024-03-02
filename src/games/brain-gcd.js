#!/usr/bin/env node
import launchingGames from './logic/playRounds.js';

const playGcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  launchingGames('gcd');
};

export default playGcdGame;
