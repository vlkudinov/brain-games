import readlineSync from 'readline-sync';

export default (task, rules) => {
  console.log('Welcome to the Brain Games!');

  if (task) {
    console.log(`${task}\n`);
  }

  const name = readlineSync.question('May I have your name? ') || 'Anonymous';

  console.log(`Hello, ${name}\n`);

  if (rules) {
    rules(name);
  }
};
