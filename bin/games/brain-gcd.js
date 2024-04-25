#!/usr/bin/env node

import func from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;
  const question = `${randomNumber1} ${randomNumber2}`;
  const numbers = [randomNumber1, randomNumber2];
  let trueAnswer;
  for (let i = 1; i <= Math.max(numbers); i += 1) {
    if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
      trueAnswer = i;
    }
  }
  return [question, String(trueAnswer)];
};

func(description, game);
