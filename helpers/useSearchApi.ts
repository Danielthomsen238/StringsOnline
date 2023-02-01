import { create } from "zustand";

export interface StoreApi {
  searchApi: string;
  setSearchApi: (value: string) => void;
}

export const useSearchApi = create(
  (set): StoreApi => ({
    searchApi: "",
    setSearchApi: (value: string) => set((state: any) => ({ searchApi: value })),
  })
);
