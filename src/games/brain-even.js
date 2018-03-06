import calc from '../calculate';
import game from '..';

const brainEven = () => {
  const task = 'Answer "yes" if number even otherwise answer "no".';
  const question = calc.randomInteger();
  const rightAnswer = (calc.isEven(question)) ? 'yes' : 'no';

  return { task, question, rightAnswer };
};

export default () => game(brainEven);
