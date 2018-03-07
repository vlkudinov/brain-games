import helpers from '../helpers';
import game from '..';

const brainGCD = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const number1 = helpers.randomInteger();
  const number2 = helpers.randomInteger();
  const question = `${number1} ${number2}`;
  const rightAnswer = helpers.gcd(number1, number2);

  return { task, question, rightAnswer };
};

export default () => game(brainGCD);
