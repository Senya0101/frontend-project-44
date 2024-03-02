#!/usr/bin/env node
import launchingGames from './logic/playRounds.js';

const playPrimeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  launchingGames('prime');
};

export default playPrimeGame;
