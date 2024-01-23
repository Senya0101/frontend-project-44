#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  const questions = generateQuestions(3);
  let correctAnswersCount = 0;
  for (const question of questions) {
    const [num1, num2] = question.split(' ');
    const correctAnswer = String(findGCD(parseInt(num1), parseInt(num2)));
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

function generateQuestions(count) {
  const questions = [];
  for (let i = 0; i < count; i++) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    questions.push(`${num1} ${num2}`);
  }
  return questions;
}

function findGCD(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return findGCD(num2, num1 % num2);
}

brainGcd();
