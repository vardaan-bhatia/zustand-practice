import create from "zustand";

const useStore = create((set) => ({
  watchLater: [],
  add: (item) => set((state) => ({ watchLater: [item, ...state.watchLater] })),
  remove: (item) =>
    set((state) => ({
      watchLater: state.watchLater.filter((w) => w.id !== item.id),
    })),
}));

export default useStore;
