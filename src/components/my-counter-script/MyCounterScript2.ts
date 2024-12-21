import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';


export default defineComponent({
   props: {
      value: {
         type: Number,
         required: true,
      },
      text: String
   },
   setup(props) {
      console.log('<--------------- JK MyCounter --------------->');
      console.log('props.value', props);
      const { counter, squareCounter } = useCounter(props.value);
      return {
         counter, squareCounter
      }
   }
});