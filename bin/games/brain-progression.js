#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../brain-games.js';

export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomProgression = () => {
  const start = generateRandomNumber(1, 10);
  const step = generateRandomNumber(1, 5);
  const length = generateRandomNumber(5, 10);
  const hiddenIndex = generateRandomNumber(0, length - 1);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  progression.splice(hiddenIndex, 1, '..');
  return { progression, hiddenNumber: start + step * hiddenIndex };
};

export const checkingАnswer = (userAnswer, correct) => {
  if (userAnswer === correct) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
};

export const playProgressionGame = () => {
  console.log('What number is missing in the progression?');
  let correctAnswer = 0;
  for (let count = 0; count < 3; count += 1) {
    const { progression, hiddenNumber } = randomProgression();
    console.log('Question:', progression.join(' '));
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (checkingАnswer(userAnswer, hiddenNumber)) {
      correctAnswer += 1;
    } else {
      break;
    }
  }
  if (correctAnswer === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default { playProgressionGame, randomProgression, checkingАnswer, generateRandomNumber };
