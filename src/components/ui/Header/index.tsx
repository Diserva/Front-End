// src/components/ui/Header/index.tsx

'use client';

import Link from 'next/link';

import style from './style.module.scss';

import { LogoIcon, ProfileAvatar } from '@components';
import { useUserStore } from '@store';
import { EIconSize } from '@utils';

export const Header = (): JSX.Element => {
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
            <Link href='#'>Main</Link>
          </li>
          <li>
            <Link href='#'>Functions</Link>
          </li>
          <li>
            <Link href='#'>About us</Link>
          </li>
          <li>
            <Link href='#'>Blog</Link>
          </li>
        </ul>
        {isAuth ? (
          <ProfileAvatar size={EIconSize.Size32} />
        ) : (
          <Link className={style.auth} href='/auth'>
            Auth
          </Link>
        )}
      </nav>
    </header>
  );
};
