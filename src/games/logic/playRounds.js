import readlineSync from 'readline-sync';
import userName from '../../../bin/brain-games.js';
import questionGenerator from './questionGenerator.js';
import checkingАnswer from './checkingАnswer.js';

const askUserForAnswer = () => {
  const userInput = readlineSync.question('Your answer: ');
  const userAnswer = Number(userInput);
  return { userInput, userAnswer };
};

const playRounds = (game) => {
  for (let round = 0; round < 3; round += 1) {
    const correctAnswer = questionGenerator(game);
    const { userInput, userAnswer } = askUserForAnswer();

    if (!Number.isNaN(userAnswer)) {
      if (!checkingАnswer(userAnswer, correctAnswer)) {
        return;
      }
    } else if (!checkingАnswer(userInput, correctAnswer)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playRounds;
