import { describe, expect, test } from "vitest";

import { useCounter } from '@/composables/useCounter';

describe('UseCounter.test', () => {
   test('initializes counter with default values', () => {
      const { counter, squareCounter } = useCounter();
      expect(counter.value).toBe(5);
      expect(squareCounter.value).toBe(Math.pow(5, 2));
   });

   test('initializes counter with provided initial value', () => {
      const initialValue = 10;
      const { counter, squareCounter } = useCounter(initialValue);
      expect(counter.value).toBe(initialValue);
      expect(squareCounter.value).toBe(Math.pow(initialValue, 2));
   });

   test('increments counter correctly', () => {
      const { counter, squareCounter } = useCounter();
      counter.value++;
      expect(counter.value).toBe(6);
      expect(squareCounter.value).toBe(Math.pow(6, 2));
   });
});