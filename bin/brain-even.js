#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const generateRandomNumber = () => Math.floor(Math.random() * 100);
const getUserAnswer = () => {
  return readlineSync.question('Your answer: ').toLowerCase();
};
const playGame = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const question = generateRandomNumber();
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();

    if ((isEven(question) && userAnswer === 'yes') ||
        (!isEven(question) && userAnswer === 'no')) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(question) ? 'no' : 'yes'}'.`);
      console.log(`Let's try again, ${name}!`);
      correctAnswersCount = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
playGame();