import helpers from '../helpers';

const brainBalance = () => {
  const task = 'Balance the given number.';
  const number = helpers.getRandomInt(100000);
  const question = `${number}`;
  const rightAnswer = String(helpers.getBalance(number));

  return { task, question, rightAnswer };
};

export default () => brainBalance;
