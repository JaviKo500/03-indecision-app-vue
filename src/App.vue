<template>
   <h1 class="text-3xl font-bold underline">
      My first vue app
   </h1>
   <hr>
   <MyCounter :value="5" text="init value 5"/>  
   <MyCounterScript :value="1" text="init value 1"/>
   <MyCounterScript2 :value="3" text="init value 3"/>
</template>
<script lang="ts" setup>
   import MyCounter from './components/MyCounter.vue';
   import MyCounterScript from './components/MyCounterScript.vue';
   import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>