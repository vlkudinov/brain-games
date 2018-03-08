import helpers from '../helpers';
import game from '..';

const brainPrime = () => {
  const task = 'Is this number prime?';
  const question = helpers.getRandomInt();
  const rightAnswer = (helpers.isPrime(question)) ? 'yes' : 'no';

  return { task, question, rightAnswer };
};

export default () => game(brainPrime);
