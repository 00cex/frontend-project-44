#!/usr/bin/env node
import { result } from 'lodash';
import func from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.'
const game = () => {
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;
    const question = `${randomNumber1} ${randomNumber2}`
    const numbers = [randomNumber1, randomNumber2]
    for (let i = 0; i <= Math.max(numbers)) {
        let result = []
        if (randomNumber1 % i === 0 && randomNumber1 % i === 0) {
            result.push(i)
        }
        let trueAnswer = Math.max(result)
    }
    return [question, trueAnswer]
}

func(description, game)
