import { defineStore } from "pinia";

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
  }
);
