'use client';

import { create } from 'zustand';

interface State {
  menuBurger: boolean;
  toggleBurger: () => void;
}

export const useHeaderStore = create<State>((set) => ({
  menuBurger: false,
  toggleBurger: () => set((state) => ({ menuBurger: !state.menuBurger })),
}));
