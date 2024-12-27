import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import MessageBox from '@/components/chat/MessageBox.vue';

describe('MessageBox.test', () => {
   const wrapper = mount(MessageBox);
   test('render input and button elements correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
      expect(wrapper.find('button').exists()).toBeTruthy();
      expect(wrapper.find('button svg').exists()).toBe(true);
   });
   test('emits message event when button is clicked with message value', async () => {
      const message = 'Hello World';

      await wrapper.find('input[type="text"]').setValue(message);

      await wrapper.find('button').trigger('click');

      console.log('<--------------- JK MessageBox.test --------------->');
      console.log(wrapper.emitted('sendMessage')?.[0]);

      expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

      expect(wrapper.vm.message).toBe('');
   });
});