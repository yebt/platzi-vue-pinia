import { defineStore } from "pinia";

export default defineStore(
  // the id of the store is main -> for global, module_name-> for module
  "profile",
  {
    state: () => ({
      id: 1,
      username: "walo",
      avatar: "/avatars/avatar.jpg",
      status: "active",
    }),
  }
);
