import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
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
   test('renders chat messages correctly', () => {
      const wrapper = mount(ChatMessages, {
         props: {
            messages,
         },
      });

      const chatBubbles = wrapper.findAllComponents({
         name: 'ChatBubble',
      });

      expect(chatBubbles.length).toBe(messages.length);
   });
});