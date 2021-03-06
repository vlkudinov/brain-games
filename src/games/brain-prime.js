import helpers from '../helpers';

const brainPrime = () => {
  const task = 'Answer "yes" if number is prime otherwise answer "no".';
  const question = helpers.getRandomInt();
  const rightAnswer = (helpers.isPrime(question)) ? 'yes' : 'no';

  return { task, question, rightAnswer };
};

export default () => brainPrime;
