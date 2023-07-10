#!/usr/bin/env node
import readlineSync from 'readline-sync';
import func from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const game = () => {
  const isEven = (num) => num % 2 === 0;
  const number = Math.floor(Math.random() * 100) + 1;
  const trueAnswer = isEven(number) ? 'yes' : 'no';
  const question = number.toString();
  return [question, trueAnswer];
};
func(description, game);
