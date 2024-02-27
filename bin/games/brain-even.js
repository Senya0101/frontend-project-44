#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../brain-games.js';
import generateRandomNumber from '../src/randomNumberGeneration.js'

export function isEven(number) {
  return number % 2 === 0;
}

export const checkingАnswer = (userAnswer, correct) => {
  if (userAnswer.toLowerCase() === correct.toLowerCase()) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
};

export const playEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber();
    const correct = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!checkingАnswer(userAnswer, correct)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default { playEvenGame, isEven, checkingАnswer };
