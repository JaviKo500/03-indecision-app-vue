import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import MessageBox from '@/components/chat/MessageBox.vue';

describe('MessageBox.test', () => {
   test('render input and button elements correctly', () => {
      const wrapper = mount(MessageBox);
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
      expect(wrapper.find('button').exists()).toBeTruthy();
      expect(wrapper.find('button svg').exists()).toBe(true);
   });
});