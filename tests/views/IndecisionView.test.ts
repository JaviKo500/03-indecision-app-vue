import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';
import IndecisionView from '@/views/IndecisionView.vue';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';

describe('IndecisionView.test', () => {

   const mockChatMessages = {
      template: '<div data-test-id="mock-messages">Mock Chat Messages</div>',
   }
   test('renders chat messages and message box correctly', () => {
      const wrapper = mount(IndecisionView);

      expect(wrapper.html()).toMatchSnapshot();

      expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
      expect(wrapper.findComponent(MessageBox).exists()).toBe(true);
   });

   test('Calls onMessage when sending a message', () => {
      const wrapper = mount(IndecisionView, {
         global: {
            stubs: {
               ChatMessages: mockChatMessages,
            }
         }
      });
      vi.useFakeTimers();
      const messageBoxComponent = wrapper.findComponent(MessageBox);

      messageBoxComponent.vm.$emit('sendMessage', 'Hello World');

      vi.advanceTimersByTime(150);

      expect(wrapper.find('[data-test-id="mock-messages"').exists()).toBe(true);

   });
});