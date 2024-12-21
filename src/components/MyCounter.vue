<template>
   <section>
      <h3>Counter: {{  counter  }}</h3>
      <h3>Square: {{ squareCounter }}</h3>
      <small>{{ text }}</small>
      <div>
         <!-- <button @click="increment">+1</button>
         <button @click="decrement">-1</button> -->
         <button class="btn" @click="counter++">+1</button>
         <button class="btn" @click="counter--">-1</button>
      </div>
   </section>
</template>

<script lang="ts" setup>
   import { computed, ref } from 'vue';

   interface Props {
      value: number;
      text: string;
   }

   const props = defineProps<Props>();

   // const props = defineProps({
   //    value: {
   //       type: Number,
   //       default: 1,
   //    }
   // });

   console.log('<--------------- JK MyCounter --------------->');
   console.log('props.value', props);
   const counter = ref(props.value );
   const squareCounter =  computed(() => counter.value * counter.value);

   // function increment() {
   //    counter.value++;
   // }

   // function decrement() {
   //    counter.value--;
   // }

</script>
<style scoped >
   .btn {
      @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
   }
</style>