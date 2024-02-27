import userName from '../../brain-games.js';

const checkingАnswerGcd = (userAnswer, correct) => {
  if (Number(userAnswer) === correct) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export default checkingАnswerGcd;
