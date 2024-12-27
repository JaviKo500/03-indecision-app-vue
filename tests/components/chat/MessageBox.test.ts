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

      expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

      expect(wrapper.vm.message).toBe('');
   });

   test('emits message event when keypress.enter is triggered with message value', async () => {
      const message = 'Hello World';

      const input = await wrapper.find('input[type="text"]');

      await input.setValue(message);

      await input.trigger('keypress.enter');

      expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
   });

   test('Validation emits message event when keypress.enter or button is triggered with empty message', async () => {
      const wrapper = mount(MessageBox);
      const input = wrapper.find('input[type="text"]');
      await input.trigger('keypress.enter');
      await wrapper.find('button').trigger('click');
      expect(wrapper.emitted('sendMessage')).toBeFalsy();
   });

});