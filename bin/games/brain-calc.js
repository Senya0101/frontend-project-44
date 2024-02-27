#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../brain-games.js';
import generateRandomNumber from '../src/randomNumberGeneration.js'

export const randomExpression = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
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

export const playCalcGame = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const expression = randomExpression();
    console.log(`Question: ${expression}`);
    const answerUser = readlineSync.question('Your answer: ');
    const correct = calculate(expression).toString();
    if (!checkingАnswer(answerUser, correct)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default { randomExpression, calculate, checkingАnswer, playCalcGame};
