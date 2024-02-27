#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../brain-games.js';
import generateRandomNumber from './logic/randomNumberGeneration.js';
import isPrime from './logic/isPrime.js';
import checkingАnswer from './logic/primeCheckingАnswer.js';

const playPrimeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    if (!checkingАnswer(userAnswer, correctAnswer)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playPrimeGame;
