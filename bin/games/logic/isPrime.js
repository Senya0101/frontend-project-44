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

export default isPrime;
