'use client';

import React from 'react';
import Link from 'next/link';

import style from './style.module.scss';

import { Logo } from '@/components/shared/';
import { useHeaderStore } from '@/store/';

export const Header = () => {
  const menuBurger = useHeaderStore((state) => state.menuBurger);
  const toggleBurger = useHeaderStore((state) => state.toggleBurger);

  return (
    <header className={style.header}>
      <nav>
        <Logo />
        <ul>
          <li>
            <Link href='#'>Головна</Link>
          </li>
          <li>
            <Link href='#'>Функції</Link>
          </li>
          <li>
            <Link href='#'>Про Нас</Link>
          </li>
          <li>
            <Link href='#'>Блог</Link>
          </li>
        </ul>
        <div className={style.profile}>profile</div>
      </nav>
    </header>
  );
};
