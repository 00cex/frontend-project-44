import readlineSync from 'readline-sync';

export default (description, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const [question, trueAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (trueAnswer !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
