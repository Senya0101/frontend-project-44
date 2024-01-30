#!/usr/bin/env node
import readlineSync from 'readline-sync';

function isEven(number) {
  return number % 2 === 0;
}

const playEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log("Let's try again!");
      break;
    }
  }

  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

playEvenGame();
