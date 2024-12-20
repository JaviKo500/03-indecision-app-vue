import { computed, ref, defineComponent } from 'vue';


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
      const counter = ref(props.value ?? 1);
      const squareCounter = computed(() => counter.value * counter.value);
      return {
         counter, squareCounter
      }
   }
});