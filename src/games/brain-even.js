import helpers from '../helpers';
import game from '..';

const brainEven = () => {
  const task = 'Answer "yes" if number is even otherwise answer "no".';
  const question = helpers.getRandomInt();
  const rightAnswer = (helpers.isEven(question)) ? 'yes' : 'no';

  return { task, question, rightAnswer };
};

export default () => game(brainEven);
