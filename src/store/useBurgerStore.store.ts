// src/store/useBurgerStore.store.ts

'use client';

import { create } from 'zustand';

interface State {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export const useBurgerStore = create<State>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
