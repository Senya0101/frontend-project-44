#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../../bin/brain-games.js';
import generateRandomNumber from './logic/randomNumberGeneration.js';
import isPrime from './logic/isPrime.js';
import checkingАnswer from './logic/checkingАnswer.js';

const playPrimeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber();
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!checkingАnswer(userAnswer, correctAnswer)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playPrimeGame;
