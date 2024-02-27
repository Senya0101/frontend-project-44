#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../brain-games.js';
import calculate from './logic/calc2.js';
import checkingАnswerCalc from './logic/calcCheckingАnswer.js';
import randomExpression from './logic/calculate.js';

const playCalcGame = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const expression = randomExpression();
    console.log(`Question: ${expression}`);
    const answerUser = readlineSync.question('Your answer: ');
    const correct = calculate(expression).toString();
    if (!checkingАnswerCalc(answerUser, correct)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playCalcGame;
