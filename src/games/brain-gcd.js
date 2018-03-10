import helpers from '../helpers';

const brainGCD = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const number1 = helpers.getRandomInt();
  const number2 = helpers.getRandomInt();
  const question = `${number1} ${number2}`;
  const rightAnswer = String(helpers.getGCD(number1, number2));

  return { task, question, rightAnswer };
};

export default () => brainGCD;
