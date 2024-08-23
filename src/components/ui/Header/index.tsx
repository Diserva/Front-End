// src/components/ui/Header/index.tsx

'use client';

import Link from 'next/link';
import clsx from 'clsx';

import s from './style.module.scss';

import { LogoIcon, ProfileAvatar } from '@components';
import { useUserStore } from '@store';
import { EIconSize } from '@utils';

export const Header = (): JSX.Element => {
  const { isAuth, username } = useUserStore();

  return (
    <header className={s.header}>
      <div className={clsx('container', s.container)}>
        {/* logotype */}
        <Link href='/'>
          <div className={s.logo}>
            <LogoIcon size={EIconSize.Size32} />
            <h2>CEAVEX</h2>
          </div>
        </Link>

        {/* navigation */}
        <nav className={s.navigation}>
          <ul className={s.navigation__list}>
            <li>
              <Link className={clsx('link', s.navigation__link)} href='#'>
                Main
              </Link>
            </li>
            <li>
              <Link className={clsx('link', s.navigation__link)} href='#'>
                Functions
              </Link>
            </li>
            <li>
              <Link className={clsx('link', s.navigation__link)} href='#'>
                About us
              </Link>
            </li>
            <li>
              <Link className={clsx('link', s.navigation__link)} href='#'>
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* auth-link / avatar */}
        <div>
          {isAuth ? (
            <div className={s.profile}>
              <h6 className={s.nickname}>{username}</h6>
              <ProfileAvatar size={EIconSize.Size32} />
            </div>
          ) : (
            <Link className={s.auth} href='/auth'>
              Auth
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
