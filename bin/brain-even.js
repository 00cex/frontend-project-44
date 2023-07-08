#!/usr/bin/env node
import readlineSync from 'readline-sync';

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const question = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isEven = (num) => num % 2 === 0;
    const trueAnswer = isEven(question) ? 'yes' : 'no';
    if (trueAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
Let's try again, ${name}!`);
      break;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

evenGame();
