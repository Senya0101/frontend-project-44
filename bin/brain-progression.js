#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateArithmeticProgression = () => {
  const start = Math.floor(Math.random() * 10 + 1);
  const step = Math.floor(Math.random() * 5 + 1);
  const length = Math.floor(Math.random() * 6 + 5);
  const hiddenIndex = Math.floor(Math.random() * length);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  progression.splice(hiddenIndex, 1, '..');
  return { progression, hiddenNumber: start + step * hiddenIndex };
};
const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  let correctAnswer = 0;
  while (correctAnswer < 3) {
    const { progression, hiddenNumber } = generateArithmeticProgression();
    console.log('Question:', progression.join(' '));
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer === hiddenNumber) {
      console.log('Correct!');
      correctAnswer += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (correctAnswer === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
brainProgression();
