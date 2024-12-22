<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
   <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
      <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
         <span>Mi esposa</span>
      </div>
      <!-- * Chat Messages -->
      <ChatMessages :messages="messages" />
      <!-- * Message Box -->
      <MessageBox />
   </div>
</template>
<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
   {
      id: new Date().getTime(),
      message: 'Hello',
      itsMine: true,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
   },
   {
      id: new Date().getTime() + 1,
      message: 'Hey there',
      itsMine: false,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
   },
   {
      id: new Date().getTime() + 2,
      message: 'How are you?',
      itsMine: true,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
   },
]);

</script>