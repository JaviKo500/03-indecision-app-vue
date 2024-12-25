import { expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';

test('adds 1 + 2 to equal 3', () => {
   // Preparation

   const a = 1;
   const b = 2;

   // Execution
   const result = sum(a, b);

   expect(result).toBe(3);
});

test('should return 15 if the array has 5 elements', () => {

   // Preparation
   const arr = [1, 2, 3, 4, 5];

   // Execution
   const result = addArray(arr);

   expect(result).toBe(15);
});

test('should return 0 if the array is empty', () => {
   // Preparation
   const arr = [];

   // Execution
   const result = addArray(arr);

   expect(result).toBe(0);

});

test('check', () => {

});