'use client';

import { create } from 'zustand';

interface UserState {
  discordId: string;
  username: string;
  avatar: string;
  status: string;
  permission: string;
  globalName: string;
  locale: string;
  avatarUrl: string;
  isAuth: boolean;
  setUser: (user: UserState) => void;
}

export const useUserStore = create<UserState>((set) => ({
  discordId: '',
  username: '',
  avatar: '',
  status: '',
  permission: '',
  globalName: '',
  locale: '',
  avatarUrl: '',
  isAuth: false,
  setUser: (user) =>
    set(() => ({
      discordId: user.discordId,
      username: user.username,
      avatar: user.avatar,
      status: user.status,
      permission: user.permission,
      globalName: user.globalName,
      locale: user.locale,
      avatarUrl: `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}`,
      isAuth: true,
    })),
}));
