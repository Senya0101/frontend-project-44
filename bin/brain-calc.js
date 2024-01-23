#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.floor(Math.random() * 100);
const generateRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.floor(Math.random() * 3));
  return operations[randomIndex];
};
const calculateExpression = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let correctAnswersCount = 0;
  const maxRounds = 3;
  while (correctAnswersCount < maxRounds) {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const operation = generateRandomOperation();
    const correctAnswer = calculateExpression(num1, num2, operation);
    console.log(`Question: ${num1} ${operation} ${num2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswersCount === maxRounds) {
    console.log(`Congratulations, ${name}!`);
  }
};
brainCalc();
