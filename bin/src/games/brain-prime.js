#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export const playPrimeGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 30);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && isPrime(number)) || (answer === 'no' && !isPrime(number))) {
      console.log('Correct!');
    } else {
      console.log(`Sorry, '${answer}' is wrong answer ;(. Correct answer was '${isPrime(number) ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default { playPrimeGame, isPrime };
