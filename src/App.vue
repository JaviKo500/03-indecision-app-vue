<template>
   <h1>My first vue app</h1>
   <hr>
   <MyCounter :value="5" text="init value 5"/>  
   <MyCounterScript :value="1" text="init value 1"/>
</template>
<script lang="ts" setup>
   import MyCounter from './components/MyCounter.vue';
   import MyCounterScript from './components/MyCounterScript.vue';
</script>