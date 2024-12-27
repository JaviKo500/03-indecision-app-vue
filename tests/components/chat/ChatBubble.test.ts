import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import ChatBubble from '@/components/chat/ChatBubble.vue';
describe('ChatBubble.test', () => {
   test('renders own message correctly', () => {
      const message = 'Hello World';

      const wrapper = mount(ChatBubble, {
         props: {
            message,
            itsMine: true
         }
      });

      expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
      expect(wrapper.find('.bg-blue-200').text()).toContain(message);
      expect(wrapper.find('.bg-grey-300').exists()).toBeFalsy();
   });

   test('renders received message correctly', () => {
      const message = 'Hello World';

      const wrapper = mount(ChatBubble, {
         props: {
            message,
            itsMine: false
         }
      });

      expect(wrapper.find('.flex').exists()).toBeTruthy();
      expect(wrapper.find('.capitalize').text()).toContain(message);
      expect(wrapper.find('.bg-grey-200').exists()).toBeFalsy();
      expect(wrapper.find('img').exists()).toBe(false);
   });
   test('renders received message correctly with image', () => {
      const message = 'Hello World';
      const image = 'https://picsum.photos/200';
      const wrapper = mount(ChatBubble, {
         props: {
            message,
            itsMine: false,
            image,
         }
      });

      expect(wrapper.find('.flex').exists()).toBeTruthy();
      expect(wrapper.find('.capitalize').text()).toContain(message);
      expect(wrapper.find('.bg-grey-200').exists()).toBeFalsy();
      expect(wrapper.find('img').attributes('src')).toBe(image);
   });
});