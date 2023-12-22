import { create } from "zustand";

export interface Values {
  contactState: boolean;
  setContactState: (newContactState: boolean) => void;
}

export const useValueStore = create<Values>((set) => ({
  contactState: false,
  setContactState: (newContactState) => set({ contactState: newContactState }),
}));
