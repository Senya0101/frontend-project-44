import generateRandomNumber from './randomNumberGeneration.js';

const randomExpression = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  return `${num1} ${operator} ${num2}`;
};

export default randomExpression;
