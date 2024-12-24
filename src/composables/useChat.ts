import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.interface';
import { ref } from 'vue';

export const useChat = () => {
   const messages = ref<ChatMessage[]>([]);

   const getHerResponse = async (): Promise<YesNoResponse> => {
      const resp = await fetch('https://yesno.wtf/api');
      const data = await resp.json() as YesNoResponse;
      return data;
   }
   const onMessage = async (message: string) => {

      if (!message) return;

      messages.value.push({
         id: new Date().getTime(),
         message,
         itsMine: true,
      });

      if (!message.endsWith('?')) return;

      await sleep(1.5);
      const { answer, image } = await getHerResponse();

      messages.value.push({
         id: new Date().getTime(),
         message: answer,
         itsMine: false,
         image,
      });
   }

   return {
      // properties
      messages,

      // methods
      onMessage,
   };
}