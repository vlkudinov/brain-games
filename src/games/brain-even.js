import math from '../math';
import game from '..';

const brainEven = () => {
  const task = 'Answer "yes" if number even otherwise answer "no".';
  const question = math.randomInteger();
  const rightAnswer = (math.isEven(question)) ? 'yes' : 'no';

  return { task, question, rightAnswer };
};

export default () => game(brainEven);
