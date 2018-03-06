import calc from '../calculate';
import game from '..';

const brainGCD = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const number1 = calc.randomInteger();
  const number2 = calc.randomInteger();
  const question = `${number1} ${number2}`;
  const rightAnswer = String(calc.gcd(number1, number2));
  return { task, question, rightAnswer };
};

export default () => game(brainGCD);
