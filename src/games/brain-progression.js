#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../../bin/brain-games.js';
import randomProgression from './logic/randomProgression.js';
import checkingАnswer from './logic/checkingАnswer.js';

const playProgressionGame = () => {
  console.log('What number is missing in the progression?');
  let correctCount = 0;
  for (let count = 0; count < 3; count += 1) {
    const { progression, hiddenNumber } = randomProgression();
    console.log('Question:', progression.join(' '));
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (checkingАnswer(userAnswer, hiddenNumber)) {
      correctCount += 1;
    } else {
      return;
    }
  }
  if (correctCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default playProgressionGame;
