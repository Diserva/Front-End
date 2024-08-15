'use client';

import { create } from 'zustand';

interface State {
  isOpen: boolean;
  toggleBurger: () => void;
  open: () => void;
  close: () => void;
}

export const useBurgerStore = create<State>((set) => ({
  isOpen: false,
  toggleBurger: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
