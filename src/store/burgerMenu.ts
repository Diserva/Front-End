'use client';

import { create } from 'zustand';

interface State {
  isOpenBurger: boolean;
  toggleBurger: () => void;
}

export const useHeaderStore = create<State>((set) => ({
  isOpenBurger: false,
  toggleBurger: () => set((state) => ({ isOpenBurger: !state.isOpenBurger })),
}));
