<template>
   <h1>My first vue app</h1>
   <hr>
   <MyCounter :value="5"/>  
   <MyCounter :value="1"/>
</template>
<script lang="ts" setup>
   import MyCounter from './components/MyCounter.vue';
</script>