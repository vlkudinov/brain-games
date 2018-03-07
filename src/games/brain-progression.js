import helpers from '../helpers';
import game from '..';

const brainProgression = () => {
  const task = 'What number is missing in this progression?';
  const arr = helpers.getAP();
  const position = helpers.getRandomElement(arr);
  const makeQuestion = arr.reduce((a, v, i) => (i === position) ? [...a, '..'] : [...a, v], []).join(' ');
  const rightAnswer = String(arr[position]);
  const question = `${makeQuestion}`;

  return { task, question, rightAnswer };
};

export default () => game(brainProgression);