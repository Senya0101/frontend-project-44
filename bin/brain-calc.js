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
  let result;
  const [num1, operator, num2] = expression.split(' ');
  switch (operator) {
    case '+':
      result = Number(num1) + Number(num2);
      break;
    case '-':
      result = Number(num1) - Number(num2);
      break;
    case '*':
      result = Number(num1) * Number(num2);
      break;
    default:
      throw new Error('Invalid operator');
  }
  return result;
}

const playCalculatorGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const expression = generateRandomExpression();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    let correctAnswer = calculate(expression).toString();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswer += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

playCalculatorGame();
