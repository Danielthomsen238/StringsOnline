import { create } from "zustand";

export interface StoreState {
  searchString: string;
  setSearchString: (value: string) => void;
}

export const useSearch = create(
  (set): StoreState => ({
    searchString: "",
    setSearchString: (value: string) => set((state: any) => ({ searchString: value })),
  })
);
