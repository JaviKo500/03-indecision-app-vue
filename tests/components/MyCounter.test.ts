import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('MyCounter.test', () => {
   test('should match snapshot', () => {
      const wrapper = mount(MyCounter, {
         props: {
            initialValue: 10,
         },
      });
      expect(wrapper.html()).toMatchSnapshot();
   });

   test('renders the counter value correctly', () => {
      const value = 5
      const wrapper = mount(MyCounter, {
         props: {
            initialValue: value,
         },
      });

      console.log('<--------------- JK MyCounter.test --------------->');
      console.log(wrapper.html());
      expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
      expect(wrapper.find('[data-test-id="square-label"]').text()).toContain(`Square: ${value * value}`);

      const [counterLabel, squareLabel] = wrapper.findAll('h3');
      expect(counterLabel.text()).toContain(`Counter: ${value}`);
      expect(squareLabel.text()).toContain(`Square: ${value * value}`);
   });
});