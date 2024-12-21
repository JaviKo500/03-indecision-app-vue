<template>
   <section>
      <h3>Counter: {{  counter  }}</h3>
      <h3>Square: {{ squareCounter }}</h3>
      <small>{{ text }}</small>
      <div>
         <!-- <button @click="increment">+1</button>
         <button @click="decrement">-1</button> -->
         <button @click="counter++">+1</button>
         <button @click="counter--">-1</button>
      </div>
   </section>
</template>

<script lang="ts">
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
      setup( props ){         
            console.log('<--------------- JK MyCounter --------------->');
            console.log('props.value', props);
            const { counter, squareCounter } = useCounter( props.value );
            return {
               counter, squareCounter
            }
      }
   });

</script>
<style scoped >
h1 {
  color: red;
}
body {
  background-color: black;
}
</style>