#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../brain-games.js';
import generateRandomNumber from './logic/randomNumberGeneration.js';
import checkingАnswerEven from './logic/evencheckingАnswer.js';
import isEven from './logic/isEven.js';

const playEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber();
    const correct = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!checkingАnswerEven(userAnswer, correct)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playEvenGame;
