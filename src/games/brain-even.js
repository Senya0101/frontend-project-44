#!/usr/bin/env node
import launchingGames from './logic/playRounds.js';

const playEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  launchingGames('even');
};

export default playEvenGame;
