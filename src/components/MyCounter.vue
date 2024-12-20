<template>
   <section>
      <h3>Counter: {{  counter  }}</h3>
      <h3>Square: {{ squareCounter }}</h3>
      <div>
         <!-- <button @click="increment">+1</button>
         <button @click="decrement">-1</button> -->
         <button @click="counter++">+1</button>
         <button @click="counter--">-1</button>
      </div>
   </section>
</template>

<script lang="ts" setup>
   import { computed, ref } from 'vue';
   const counter = ref(2);
   const squareCounter =  computed(() => counter.value * counter.value);

   // function increment() {
   //    counter.value++;
   // }

   // function decrement() {
   //    counter.value--;
   // }

</script>
<style scoped >
h1 {
  color: red;
}
body {
  background-color: black;
}
</style>