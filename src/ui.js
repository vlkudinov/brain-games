import colors from 'colors';
import readlineSync from 'readline-sync';

export default {
  games: ['Brain-Even', 'Brain-Calculator', 'Brain-Balance', 'Brain-GCD', 'Brain-Progression', 'Brain-Prime'],

  banner() {
    return console.log(`
    ____            _          _____                           
   |  _ \\          (_)        / ____|                          
   | |_) |_ __ __ _ _ _ __   | |  __  __ _ _ __ ___   ___  ___ 
   |  _ <| '__/ _\` | | '_ \\  | | |_ |/ _\` | '_ \` _ \\ / _ \\/ __|
   | |_) | | | (_| | | | | | | |__| | (_| | | | | | |  __/\\__ \\
   |____/|_|  \\__,_|_|_| |_|  \\_____|\\__,_|_| |_| |_|\\___||___/
   
   ${'************************************************************'.white}  
   
                      WELCOME TO THE BRAIN GAMES!                                                                           
  `.magenta);
  },
  userName() {
    return readlineSync.question('May I have your name? ') || 'Anonymous';
  },
  greetings(name) {
    console.log(`${'Hello'.bold}, ${name.cyan}!\n`);
  },
  menu() {
    console.log('Please, choose game:'.bold);
    return Number(readlineSync.keyInSelect(this.games, 'Which game?'.bold, { limit: '$<0-6>' }));
  },
  startMessage(userChoice) {
    console.log(`Ok, ${this.games[userChoice].magenta} starting... \n`);
  },
  retry(name, func) {
    return readlineSync.keyInYN('\nTry again?'.bold) ? func() : this.bye(name);
  },
  task(task) {
    console.log(`${task}\n`.bold);
  },
  question(question) {
    console.log(`Question: ${question}`.bold);
  },
  userAnswer() {
    return readlineSync.question('Your Answer? ');
  },
  rightAnswerMessage() {
    console.log('Correct!'.green);
  },
  wrongAnswerMessage(name, wrong, right) {
    console.log(`'${wrong.red}' is wrong answer ;(. Correct answer was '${right.green}'.\nLet's try again, ${name.cyan}!`.bold);
  },
  congratulate(name) {
    console.log(`${'Congratulations'.green}, ${name}!`);
  },
  bye(name) {
    console.log(`${'\nGoodbye'.bold}, ${name.cyan}!`);
  },
};
