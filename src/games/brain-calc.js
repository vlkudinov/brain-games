import helpers from '../helpers';
import game from '..';

const brainCalc = () => {
  const task = 'What is the result of the expression?';
  const operands = ['+', '-', '*'];
  const number1 = helpers.randomInteger();
  const number2 = helpers.randomInteger();
  const operand = operands[helpers.randomElement(operands)];
  const question = `${number1} ${operand} ${number2}`;
  const rightAnswer = helpers.calculator(number1, number2, operand);

  return { task, question, rightAnswer };
};

export default () => game(brainCalc);
