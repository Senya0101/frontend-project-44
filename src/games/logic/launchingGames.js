import readlineSync from 'readline-sync';
import userName from '../../bin/brain-games.js';
import generateRandomNumber from './logic/randomNumberGeneration.js';
import isEven from './logic/isEven.js';
import checkingАnswer from './logic/checkingАnswer.js';

const games = [
  { name: 'brain-even', description: 'Answer "yes" if the number is even, otherwise answer "no".', func: playEvenGame },
  { name: 'brain-calc', description: 'What is the result of the expression?', func: playCalcGame },
  { name: 'brain-gcd', description: 'Find the greatest common divisor of given numbers.', func: playGcdGame },
  { name: 'brain-prime', description: 'Answer "yes" if given number is prime. Otherwise answer "no".', func: playPrimeGame },
  { name: 'brain-progression', description: 'What number is missing in the progression?', func: playProgressionGame },
];
  
const playGames = () => {
  for (const game of games) {
    console.log(game.description);
      for (let i = 0; i < 3; i += 1) {
      const { question, correctAnswer } = game.func();
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (checkingAnswer(userAnswer, correctAnswer)) {
        console.log("Correct!");
      } else {
        console.log("Incorrect! The correct answer was:", correctAnswer);
        break; 
      }
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default {
    games,
    playGames,
}
  