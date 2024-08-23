// src/components/ui/Header/index.tsx

'use client';

import React from 'react';
import Link from 'next/link';

import style from './style.module.scss';

import { useUserStore } from '@/store';
import { LogoIcon } from '@/components/shared';
import { EIconSize } from '@/utils';
import { Profile } from '@/components/ui';

export const Header = () => {
  const { isAuth } = useUserStore();

  return (
    <header className={style.header}>
      <nav>
        <Link href='/'>
          <div className={style.logo}>
            <LogoIcon size={EIconSize.Size32} />
            <p>Ceavex</p>
          </div>
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
        {isAuth ? (
          <Profile size={EIconSize.Size32} />
        ) : (
          <Link className={style.auth} href='/auth'>
            Auth
          </Link>
        )}
      </nav>
    </header>
  );
};
