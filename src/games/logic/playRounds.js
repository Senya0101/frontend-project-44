import readlineSync from 'readline-sync';
import userName from '../../../bin/brain-games.js';
import checkingАnswer from './checkingАnswer.js';
import questionGenerator from './questionGenerator.js';

const playRounds = (game) => {
  for (let i = 0; i < 3; i += 1) {
    const correct = questionGenerator(game);
    const userAnswer = readlineSync.question('Your answer: ');
    const userNumber = Number(userAnswer);
    if (!Number.isNaN(userNumber)) {
      if (!checkingАnswer(userNumber, correct)) {
        return;
      }
    } else if (!checkingАnswer(userAnswer, correct)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playRounds;
