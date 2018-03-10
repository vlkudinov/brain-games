import helpers from '../helpers';

const brainCalc = () => {
  const task = 'What is the result of the expression?';
  const operands = ['+', '-', '*'];
  const number1 = helpers.getRandomInt();
  const number2 = helpers.getRandomInt();
  const operand = operands[helpers.getRandomElement(operands)];
  const question = `${number1} ${operand} ${number2}`;
  const rightAnswer = String(helpers.calculate(number1, number2, operand));

  return { task, question, rightAnswer };
};

export default () => brainCalc;
