import { writable } from "svelte/store";

const createStore = (defaultValue) => {
  const { set, subscribe, update } = writable(defaultValue);
  return {
    reset: () => set(defaultValue),
    set,
    subscribe,
    update,
  };
};

const createSetStore = () => {
  const { subscribe, update, set } = writable(new Set());
  return {
    subscribe,
    add: (el) => update((wrappedSet) => wrappedSet.add(el)),
    delete: (el) =>
      update((wrappedSet) => {
        wrappedSet.delete(el);
        return wrappedSet;
      }),
    reset: () => set(new Set()),
  };
};

export const tempoControl = createStore(60);
export const rollMetadata = createStore({});
export const pedalling = createStore({
  soft: false,
  sustain: false,
  accent: false,
});
export const volume = createStore({ master: 1, left: 1, right: 1 });

export const playbackProgress = createStore(0);
export const currentTick = createStore(0);

export const activeNotes = createSetStore();

export const userSettings = createStore({
  theme: "cardinal",
  activeNoteDetails: false,
});
