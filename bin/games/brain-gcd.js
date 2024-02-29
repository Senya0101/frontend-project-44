#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../brain-games.js';
import generateRandomNumber from './logic/randomNumberGeneration.js';
import gcd from './logic/gcd.js';
import checkingАnswer from './logic/checkingАnswer.js';

const playGcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let correct = 0; correct < 3; correct += 1) {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const correctA = gcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (!checkingАnswer(userAnswer, correctA)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGcdGame;
