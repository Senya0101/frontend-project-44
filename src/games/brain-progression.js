#!/usr/bin/env node
import launchingGames from './logic/playRounds.js';

const playProgressionGame = () => {
  console.log('What number is missing in the progression?');
  launchingGames('progression');
};

export default playProgressionGame;
