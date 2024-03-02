import readlineSync from 'readline-sync';
import userName from '../../../bin/brain-games.js';
import questionGenerator from './questionGenerator.js';
import checkingАnswer from './checkingАnswer.js';

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  const userNumber = Number(userAnswer);
  return { userAnswer, userNumber };
};

const playRounds = (game) => {
  for (let i = 0; i < 3; i += 1) {
    const correct = questionGenerator(game);
    const { userAnswer, userNumber } = getUserAnswer();

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
