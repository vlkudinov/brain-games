import readlineSync from 'readline-sync';

export default (gameType) => {
  const { task } = gameType();
  let correctAnswers = 0;

  console.log('Welcome to the Brain Games!');
  console.log(`${task}\n`);
  const name = readlineSync.question('May I have your name? ') || 'Anonymous';
  console.log(`Hello, ${name}\n`);

  while (correctAnswers < 3) {
    const { question, rightAnswer } = gameType();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your Answer? ');

    if (userAnswer === String(rightAnswer)) {
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
