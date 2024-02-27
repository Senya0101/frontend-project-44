import userName from '../../brain-games.js';

const checkingАnswerEven = (userAnswer, correct) => {
  if (userAnswer.toLowerCase() === correct.toLowerCase()) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export default checkingАnswerEven;
