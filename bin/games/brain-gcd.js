#!/usr/bin/env node

import func from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';
const game = () => {
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;
  const question = `${randomNumber1} ${randomNumber2}`;
  const numbers = [randomNumber1, randomNumber2];
  const maxValue = (arr) => {
    const [one, ..rest]
    let max = arr [0]
    for (const [one])
  }
  for (let i = 0; i <= Math.max.apply(null, numbers); i += 1) {
    const result = [];
    if (randomNumber1 % i === 0 && randomNumber1 % i === 0) {
      result.push(i);
    }
    const trueAnswer = Math.max.apply(null, result);
  }
  return [question, trueAnswer];
};

func(description, game);
