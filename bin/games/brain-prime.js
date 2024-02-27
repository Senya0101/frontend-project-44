#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../brain-games.js';
import generateRandomNumber from '../src/randomNumberGeneration.js'

export const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const checkingАnswer = (userAnswer, correct) => {
  if (userAnswer === correct) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`Sorry, '${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
};

export const playPrimeGame = () => {
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

export default { playPrimeGame, isPrime, checkingАnswer };
