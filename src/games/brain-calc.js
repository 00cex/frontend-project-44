import func from '../index.js';

export default function runCalc() {
  const description = 'What is the result of the expression?';
  const game = () => {
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;
    const operations = ['+', '-', '*'];
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];
    const question = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
    let trueAnswer;
    if (randomOperation === '+') {
      trueAnswer = randomNumber1 + randomNumber2;
    } else if (randomOperation === '-') {
      trueAnswer = randomNumber1 - randomNumber2;
    } else {
      trueAnswer = randomNumber1 * randomNumber2;
    }
    return [question, String(trueAnswer)];
  };
  func(description, game);
}
