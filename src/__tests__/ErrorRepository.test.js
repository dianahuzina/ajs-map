import { test } from '@jest/globals';
import { expect } from '@jest/globals';
import ErrorRepository from '../js/ErrorRepository';

test('check existing error', () => {
  const error = new ErrorRepository();
  const result = error.translate(1);
  expect(result).toEqual('error 1');
})

test('check not existing error', () => {
  const error = new ErrorRepository();
  expect(() => error.translate(15)).toThrow('Unknown error');
})