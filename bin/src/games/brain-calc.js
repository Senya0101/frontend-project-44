#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const randomExpression = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = Math.floor(Math.random() * 30);
  const num2 = Math.floor(Math.random() * 30);
  return `${num1} ${operator} ${num2}`;
};

export const calculate = (expression) => {
  const [num1, operator, num2] = expression.split(' ');
  let result;
  if (operator === '+') {
    result = Number(num1) + Number(num2);
  } else if (operator === '-') {
    result = Number(num1) - Number(num2);
  } else if (operator === '*') {
    result = Number(num1) * Number(num2);
  } else {
    throw new Error('Invalid operator');
  }
  return result;
};

export const playCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const expression = randomExpression();
    console.log(`Question: ${expression}`);
    const answerUser = readlineSync.question('Your answer: ');
    let correct = calculate(expression).toString();
    if (answerUser === correct) {
      console.log('Correct!');
      correct += 1;
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default { playCalcGame, calculate, randomExpression };
