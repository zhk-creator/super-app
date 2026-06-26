import { create } from "zustand";

const useStore = create((set) => ({
  user: {
    name: "",
    username: "",
    email: "",
    mobile: "",
  },

  categories: [],

  notes: "",

  setUser: (userData) =>
    set(() => ({
      user: userData,
    })),

  setCategories: (categories) =>
    set(() => ({
      categories,
    })),

  setNotes: (notes) =>
    set(() => ({
      notes,
    })),
}));

export default useStore;