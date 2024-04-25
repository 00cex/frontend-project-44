#!/usr/bin/env node

import func from '../src/index.js';

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const start = Math.floor(Math.random() * 100) + 1;
  const step = Math.floor(Math.random() * 5) + 1;
  const length = Math.floor(Math.random() * 6) + 5;
  const progression = [];
  const hiddenIndex = Math.floor(Math.random() * length);
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(start + i * step);
    }
  }
  const trueAnswer = start + hiddenIndex * step;

  return [progression.join(' '), String(trueAnswer)];
};

const game = () => {
  const [question, trueAnswer] = generateProgression();
  return [question, trueAnswer];
};
func(description, game);
