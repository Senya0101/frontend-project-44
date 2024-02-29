const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomProgression = () => {
  const start = generateRandomNumber(1, 10);
  const step = generateRandomNumber(1, 5);
  const length = generateRandomNumber(5, 10);
  const hiddenIndex = generateRandomNumber(0, length - 1);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  progression.splice(hiddenIndex, 1, '..');
  return { progression, hiddenNumber: start + step * hiddenIndex };
};

export default randomProgression;
