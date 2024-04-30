#!/usr/bin/env node

import func from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const question = `${randomNumber}`;
    let trueAnswer;
    for (let i = 2; i <= Math.sqrt(randomNumber); i += 1) {
        if (randomNumber % i === 0) {
          trueAnswer = 'no'
        }
        trueAnswer = 'yes'
      }
      return [question, trueAnswer]
}
func(description, game)
