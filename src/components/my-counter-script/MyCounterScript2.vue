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

<script lang="ts" src="./MyCounterScript2.ts"></script>
<style scoped >
h1 {
  color: red;
}
body {
  background-color: black;
}
</style>