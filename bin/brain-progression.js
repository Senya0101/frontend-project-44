#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateArithmeticProgression = () => {
  const start = Math.floor(Math.random() * 10 + 1);
  const step = Math.floor(Math.random() * 5 + 1);
  const length = Math.floor(Math.random() * 6 + 5);
  const hiddenIndex = Math.floor(Math.random() * length);
  let progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + step * i);
  }
  progression.splice(hiddenIndex, 1, '..');
  return { progression, hiddenNumber: start + step * hiddenIndex };
}  
const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let correctAnswers = 0;
  while (correctAnswers < 3) { 
    const { progression, hiddenNumber } = generateArithmeticProgression();
    console.log('Question:', progression.join(' '));
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer === hiddenNumber) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
brainProgression();