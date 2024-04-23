import { defineStore } from "pinia";
import useMessagesStore from '@/stores/messages.js'

export default defineStore(
  // the id of the store is main -> for global, module_name-> for module
  "channels",
  {
    state: () => ({
      channels: [
        { id: 1, name: "General", messages: 27 },
        { id: 2, name: "Emergencias", messages: null },
        { id: 3, name: "Anuncios", messages: 2 },
        { id: 4, name: "Proyecto 1", messages: 24 },
        { id: 5, name: "Non-work", messages: null },
        { id: 6, name: "Atención a clientes", messages: 120 },
      ],
    }),
    getters: {
      getChannels: (state) => (search) => {
        const messageStore = useMessagesStore()
        return state.channels.filter((chnnl) =>
          chnnl.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ).map((chnnl) => ({ ...chnnl, messages: messageStore.countUnreadMessagesByChannelId(chnnl.id) }));
      },
      getChannelById: (state) => (id) => {
        return state.channels.find((chnnl) => chnnl.id === id)
      }
    },
  }
);
