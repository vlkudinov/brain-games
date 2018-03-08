import readlineSync from 'readline-sync';


export default (gameType) => {
  const { task } = gameType();

  console.log(`Welcome to the Brain Games!\n${task}\n`);
  const name = readlineSync.question('May I have your name? ') || 'Anonymous';
  console.log(`Hello, ${name}\n`);

  const engine = (data, rightAnswers) => {
    const { question, rightAnswer } = data();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your Answer? ');

    if (rightAnswers === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      return engine(gameType, rightAnswers + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    return false;
  };
  return engine(gameType, 1);
};
