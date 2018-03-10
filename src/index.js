import show from './ui';
import brainEven from './games/brain-even';
import brainCalc from './games/brain-calc';
import brainBalance from './games/brain-balance';
import brainGCD from './games/brain-gcd';
import brainProgression from './games/brain-progression';
import brainPrime from './games/brain-prime';

export const chooseGame = (num) => {
  switch (num) {
    case 0: return brainEven();
    case 1: return brainCalc();
    case 2: return brainBalance();
    case 3: return brainGCD();
    case 4: return brainProgression();
    case 5: return brainPrime();
    default: return 0;
  }
};

show.banner();
const userName = show.userName();
show.greetings(userName);

const gameEngine = (gameType) => {
  const { task } = gameType();
  show.task(task);

  const iter = (data, rightAnswers) => {
    const { question, rightAnswer } = data();
    show.question(question);
    const userAnswer = show.userAnswer();

    if (rightAnswers === 3) {
      show.congratulate(userName);
      return true;
    }

    if (userAnswer === rightAnswer) {
      show.rightAnswerMessage();
      return iter(gameType, rightAnswers + 1);
    }
    show.wrongAnswerMessage(userName, userAnswer, rightAnswer);
    return false;
  };
  return iter(gameType, 1);
};

const gameInterface = () => {
  const userChoice = show.menu();

  if (userChoice >= 0) {
    show.startMessage(userChoice);
    gameEngine(chooseGame(userChoice));
  } else {
    show.bye(userName);
    return false;
  }
  show.retry(userName, gameInterface);
  return true;
};

export default gameInterface;

