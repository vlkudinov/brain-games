import helpers from '../helpers';
import game from '..';

const brainProgression = () => {
  const { generateArr, removeElement } = helpers.getAP();
  const task = 'What number is missing in this progression?';
  const arr = generateArr();
  const index = helpers.getRandomElement(arr);
  const makeQuestion = removeElement(arr, index);
  const rightAnswer = String(arr[index]);
  const question = `${makeQuestion}`;

  return { task, question, rightAnswer };
};

export default () => game(brainProgression);
