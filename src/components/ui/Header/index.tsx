'use client';

import React from 'react';
import Link from 'next/link';

import style from './style.module.scss';

import { useHeaderStore } from '@/store';
import { LogoIcon } from '@/components/shared/Icon/Logo';
import { EIconSize } from '@/utils';

export const Header = () => {
  const isOpenBurger = useHeaderStore((state) => state.isOpenBurger);
  const toggleBurger = useHeaderStore((state) => state.toggleBurger);

  return (
    <header className={style.header}>
      <nav>
        <Link href='/'>
          <LogoIcon size={EIconSize.Size32} />
        </Link>
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
        <div className={style.profile}>very very long nick name </div>
      </nav>
    </header>
  );
};
