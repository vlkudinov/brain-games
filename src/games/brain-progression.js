import helpers from '../helpers';
import game from '..';

const brainProgression = () => {
  const { generateArr, makeQuestion } = helpers.getAP();
  const task = 'What number is missing in this progression?';
  const arr = generateArr();
  const index = helpers.getRandomElement(arr);
  const rightAnswer = String(arr[index]);
  const question = `${makeQuestion(arr, index)}`;

  return { task, question, rightAnswer };
};

export default () => game(brainProgression);
