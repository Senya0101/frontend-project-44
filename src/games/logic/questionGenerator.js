import randomProgression from './randomProgression.js';
import generateRandomNumber from './randomNumberGeneration.js';
import isEven from './isEven.js';
import isPrime from './isPrime.js';
import gcd from './gcd.js';
import randomExpression from './calculate.js';
import calculate from './calc2.js';

const questionGenerator = (gameType) => {
  switch (gameType) {
    case 'gcd': {
      const num1 = generateRandomNumber(20);
      const num2 = generateRandomNumber(20);
      console.log(`Question: ${num1} ${num2}`);
      const correct = gcd(num1, num2);
      return correct;
    }
    case 'even': {
      const randomNumber = generateRandomNumber(25);
      console.log(`Question: ${randomNumber}`);
      const correct = isEven(randomNumber) ? 'yes' : 'no';
      return correct;
    }
    case 'calc': {
      const expression = randomExpression();
      console.log(`Question: ${expression}`);
      const correct = calculate(expression);
      return correct;
    }
    case 'prime': {
      const primeNumber = generateRandomNumber(20);
      console.log(`Question: ${primeNumber}`);
      const correct = isPrime(primeNumber) ? 'yes' : 'no';
      return correct;
    }
    case 'progression': {
      const { progression, hiddenNumber } = randomProgression();
      console.log('Question:', progression.join(' '));
      const correct = hiddenNumber;
      return correct;
    }
    default:
      return '';
  }
};

export default questionGenerator;
