import helpers from '../helpers';
import game from '..';

const brainBalance = () => {
  const task = 'Balance the given number.';
  const number = helpers.randomInteger(100000);
  const question = `${number}`;
  const rightAnswer = helpers.balance(number);

  return { task, question, rightAnswer };
};

export default () => game(brainBalance);
