#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const generateRandomNumber = () => Math.floor(Math.random() * 100);

const playGame = async () => {
  console.log('Welcome to the Brain Games!');
  const name = await readlineSync.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const question = generateRandomNumber();
    console.log(`Question: ${question}`);
    const userAnswer = await readlineSync.prompt('Your answer: ');

    if ((isEven(question) && userAnswer.toLowerCase() === 'yes') ||
        (!isEven(question) && userAnswer.toLowerCase() === 'no')) {
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