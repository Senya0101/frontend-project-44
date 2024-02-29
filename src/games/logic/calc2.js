const calculate = (expression) => {
  const [num1, operator, num2] = expression.split(' ');
  let result;
  if (operator === '+') {
    result = Number(num1) + Number(num2);
  } else if (operator === '-') {
    result = Number(num1) - Number(num2);
  } else if (operator === '*') {
    result = Number(num1) * Number(num2);
  } else {
    throw new Error('Invalid operator');
  }
  return result;
};

export default calculate;
