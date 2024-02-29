#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../../bin/brain-games.js';
import calculate from './logic/calc2.js';
import randomExpression from './logic/calculate.js';
import checkingАnswer from './logic/checkingАnswer.js';

const playCalcGame = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const expression = randomExpression();
    const correctAnswer = calculate(expression).toString();
    console.log(`Question: ${expression}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (!checkingАnswer(answerUser, correctAnswer)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playCalcGame;
