#!/usr/bin/env node
import launchingGames from './logic/playRounds.js';

const playCalcGame = () => {
  console.log('What is the result of the expression?');
  launchingGames('calc');
};

export default playCalcGame;
