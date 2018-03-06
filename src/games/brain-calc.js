import calc from '../calculate';
import game from '..';

const brainCalc = () => {
  const task = 'What is the result of the expression?';
  const operands = ['+', '-', '*'];
  const number1 = calc.randomInteger();
  const number2 = calc.randomInteger();
  const operand = operands[calc.randomElement(operands)];
  const question = `${number1} ${operand} ${number2}`;
  const rightAnswer = String(calc.calc(number1, number2, operand));

  return { task, question, rightAnswer };
};

export default () => game(brainCalc);
