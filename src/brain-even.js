import readlineSync from 'readline-sync';
import game from '.';


const task = 'Answer "yes" if number even otherwise answer "no".';
const randomInteger = () => Math.round(Math.random() * 100);
let correctAnswers = 0;

const rules = (name) => {
  while (correctAnswers < 3) {
    const number = randomInteger();
    const rightAnswer = !(number % 2) ? 'yes' : 'no';

    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question('Your Answer? ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default () => game(task, rules);
