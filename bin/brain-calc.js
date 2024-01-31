#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateRandomExpression = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = Math.floor(Math.random() * 30);
  const num2 = Math.floor(Math.random() * 30);
  return `${num1} ${operator} ${num2}`;
};

function calculate(expression) {
  return eval(expression);
}

const playCalculatorGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  let correctAnswersCount = 0;

  for (let i = 0; i < 3; i += 1) {
    const expression = generateRandomExpression();
    const correctAnswer = calculate(expression);

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += correctAnswersCount + 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

playCalculatorGame();
