import randomProgression from './randomProgression.js';
import generateRandomNumber from './randomNumberGeneration.js';
import isEven from './isEven.js';
import isPrime from './isPrime.js';
import gcd from './gcd.js';
import randomExpression from './calculate.js';
import calculate from './calc2.js';

const questionGenerator = (gameType) => {
  let question;
  let correct;

  switch (gameType) {
    case 'gcd': {
      const num1 = generateRandomNumber(20);
      const num2 = generateRandomNumber(20);
      question = `Question: ${num1} ${num2}`;
      correct = gcd(num1, num2);
      break;
    }
    case 'even': {
      const randomNumber = generateRandomNumber(25);
      question = `Question: ${randomNumber}`;
      correct = isEven(randomNumber) ? 'yes' : 'no';
      break;
    }
    case 'calc': {
      const expression = randomExpression();
      question = `Question: ${expression}`;
      correct = calculate(expression);
      break;
    }
    case 'prime': {
      const primeNumber = generateRandomNumber(20);
      question = `Question: ${primeNumber}`;
      correct = isPrime(primeNumber) ? 'yes' : 'no';
      break;
    }
    case 'progression': {
      const { progression, hiddenNumber } = randomProgression();
      question = `Question: ${progression.join(' ')}`;
      correct = hiddenNumber;
      break;
    }
    default:
      return '';
  }

  console.log(question);
  return correct;
};

export default questionGenerator;
