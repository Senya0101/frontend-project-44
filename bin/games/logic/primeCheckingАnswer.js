import userName from '../../brain-games.js';

const checkingАnswerPrime = (userAnswer, correct) => {
  if (userAnswer === correct) {
    console.log('Correct!');
    return true;
  }
  console.log(`Sorry, '${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export default checkingАnswerPrime;
