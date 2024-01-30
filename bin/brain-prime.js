#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isPrime = (num) => {
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

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const number = Math.floor(Math.random() * 30) + 1;
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && isPrime(number)) || (answer === 'no' && !isPrime(number))) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`Sorry, '${answer}' is wrong answer ;(. Correct answer was '${isPrime(number) ? 'yes' : 'no'}'.`);
      break;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

playGame();
