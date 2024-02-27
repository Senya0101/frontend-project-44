#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../brain-games.js';
import generateRandomNumber from '../src/randomNumberGeneration.js'

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

export const checkingАnswer = (userAnswer, correct) => {
  if (Number(userAnswer) === correct) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
};

export const playGcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let correct = 0; correct < 3; correct += 1) {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const correctA = gcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!checkingАnswer(userAnswer, correctA)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default { playGcdGame, gcd, checkingАnswer };
