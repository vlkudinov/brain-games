import math from '../math';
import game from '..';

const brainCalc = () => {
  const task = 'What is the result of the expression?';
  const operands = ['+', '-', '*'];
  const number1 = math.randomInteger();
  const number2 = math.randomInteger();
  const operand = operands[math.randomElement(operands)];
  const question = `${number1} ${operand} ${number2}`;
  const rightAnswer = String(math.calc(number1, number2, operand));

  return { task, question, rightAnswer };
};

export default () => game(brainCalc);
