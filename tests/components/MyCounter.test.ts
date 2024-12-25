import { describe, test } from 'vitest';
import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('MyCounter.test', () => {
   test('should match snapshot', () => {
      const wrapper = mount(MyCounter, {
         props: {
            initialValue: 10,
         },
      });

      console.log('<--------------- JK MyCounter.test --------------->');
      console.log(wrapper.html());
   });
});