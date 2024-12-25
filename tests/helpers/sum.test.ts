import { expect, test } from 'vitest';
import { sum } from '../../src/helpers/sum';

test('adds 1 + 2 to equal 3', () => {
   // Preparation

   const a = 1;
   const b = 2;

   // Execution
   const result = sum(a, b);

   expect(result).toBe(3);
});