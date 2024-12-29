import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';

describe('ChatMessage.test', () => {
   const messages: ChatMessage[] = [
      {
         id: 1,
         message: 'Hello World',
         itsMine: true,
      },
      {
         id: 2,
         message: 'Hello World',
         itsMine: false,
         image: 'https://picsum.photos/200',
      }
   ];

   const wrapper = mount(ChatMessages, {
      props: {
         messages,
      },
   });

   test('renders chat messages correctly', () => {

      const chatBubbles = wrapper.findAllComponents({
         name: 'ChatBubble',
      });

      expect(chatBubbles.length).toBe(messages.length);
   });

   test('scrolls to bottom when new message is added', async () => {
      vi.useFakeTimers();
      const scrollToMock = vi.fn();

      const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
      chatRef.scrollTo = scrollToMock;

      await wrapper.setProps({
         messages: [...messages, {
            id: 3,
            message: 'Hello World??',
            itsMine: true,
         }, {
            id: 5,
            message: 'Hello World??',
            itsMine: true,
            image: 'https://picsum.photos/200',
         }],
      });

      // await new Promise(resolve => setTimeout(resolve, 150));
      vi.advanceTimersByTime(150)
      expect(scrollToMock).toHaveBeenCalled();
      expect(scrollToMock).toHaveBeenCalledTimes(1);
      expect(scrollToMock).toHaveBeenCalledWith({
         behavior: 'smooth',
         top: expect.any(Number),
      });
   });
});