import func from '../index.js';

export default function runPrime() {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const game = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const question = `${randomNumber}`;
    let trueAnswer = 'yes';
    for (let i = 2; i <= Math.sqrt(randomNumber); i += 1) {
      if (randomNumber % i === 0) {
        trueAnswer = 'no';
        break;
      }
    }
    return [question, trueAnswer];
  };
  func(description, game);
}
