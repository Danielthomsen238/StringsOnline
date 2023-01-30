import { create } from "zustand";

interface Switch {
  toggle: boolean;
  switchToggle: () => void;
}

export const useSwitch = create<Switch>((set) => ({
  toggle: false,
  switchToggle: () =>
    set((state) => {
      return { toggle: !state.toggle };
    }),
}));
