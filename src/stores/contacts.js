import { defineStore } from "pinia";
import useProfileStore from '@/stores/profile.js'


export default defineStore(
  // the id of the store is main -> for global, module_name-> for module
  "contacts",
  {
    state: () => ({
      contacts: [
        { id: 2, name: 'Jason', avatar: '/avatars/avatar-02.jpg' },
        { id: 3, name: 'Janet', avatar: '/avatars/avatar-03.jpg' }
      ],
    }),
    getters: {
      getContactById: (state) => (id) => {
        const profileStore = useProfileStore()
        if (id === profileStore.id) return {
          id: profileStore.id,
          name: profileStore.username,
          avatar: profileStore.avatar
        }
        return state.contacts.find(ctct => ctct.id === id)
      }
    }
  }
);
