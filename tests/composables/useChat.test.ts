import { useChat } from '@/composables/useChat';
import { describe, expect, test, vi } from 'vitest';

describe('UseChat.test', () => {
   test('add message correctly when onMessage is called', async () => {
      const text = 'Hello World';
      const { onMessage, messages } = useChat();

      await onMessage(text);

      expect(messages.value.length).toBe(1);
      expect(messages.value[0].itsMine).toBe(true);
      expect(messages.value[0].message).toBe(text);
      expect(messages.value[0]).toEqual({
         id: expect.any(Number),
         itsMine: true,
         message: text,
      });

   });

   test('add nothing when message is empty', async () => {
      const text = '';
      const { onMessage, messages } = useChat();

      await onMessage(text);

      expect(messages.value.length).toBe(0);
   });

   test('get her response correctly when message end with "?"', async () => {
      const text = 'like coffee?';
      const { onMessage, messages } = useChat();

      await onMessage(text);
      await new Promise(resolve => setTimeout(resolve, 2000));

      const [myMessage, herMessage] = messages.value;
      expect(messages.value.length).toBe(2);
      expect(myMessage.itsMine).toBe(true);
      expect(herMessage.itsMine).toBe(false);
      expect(herMessage).toEqual({
         id: expect.any(Number),
         itsMine: false,
         message: expect.any(String),
         image: expect.any(String),
      });
      expect(myMessage).toEqual({
         id: expect.any(Number),
         itsMine: true,
         message: text,
      })
   });
});