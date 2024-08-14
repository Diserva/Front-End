import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { EIconSize } from '@utils/index';

import { footer, main, social, legal } from './style.module.scss';

export function Footer() {
  const footerMain = (
    <div className={main}>
      <div className={social}>
        <Link href='#'>
          <Image
            src='/icons/social/github.svg'
            width={EIconSize.Size32}
            height={EIconSize.Size32}
            alt='github'
          />
        </Link>
        <Link href='#'>
          <Image
            src='/icons/social/telegram.svg'
            width={EIconSize.Size32}
            height={EIconSize.Size32}
            alt='telegram'
          />
        </Link>
        <Link href='#'>
          <Image
            src='/icons/social/discord.svg'
            width={EIconSize.Size32}
            height={EIconSize.Size32}
            alt='discord'
          />
        </Link>
        <Link href='#'>
          <Image
            src='/icons/social/email.svg'
            width={EIconSize.Size32}
            height={EIconSize.Size32}
            alt='email'
          />
        </Link>
        <Link href='#'>
          <Image
            src='/icons/social/twitter.svg'
            width={EIconSize.Size32}
            height={EIconSize.Size32}
            alt='twitter'
          />
        </Link>
        <Link href='#'>
          <Image
            src='/icons/social/instagram.svg'
            width={EIconSize.Size32}
            height={EIconSize.Size32}
            alt='instagram'
          />
        </Link>
      </div>
      <nav>
        <div>
          <div>Головне</div>
          <div>
            <Link href='#'>Про нас</Link>
          </div>
        </div>
        <div>
          <div>Партнери</div>
          <div>
            <Link href='#'>Family Play</Link>
            <Link href='#'>Strategy World</Link>
          </div>
        </div>
        <div>
          <div>Довідник</div>
          <div>
            <Link href='#'>Умови Користування</Link>
            <Link href='#'>Політика конфіденційності</Link>
            <Link href='#'>Cookies</Link>
          </div>
        </div>
        <div>
          <div>Розробники</div>
          <div>
            <Link href='#'>iconservator</Link>
            <Link href='#'>Viva</Link>
            <Link href='#'>chyVacheck</Link>
            <Link href='#'>Danya</Link>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
  const footerLegal = (
    <div className={legal}>
      <hr />
      <div>
        <div>
          © 2024 - {new Date().getFullYear()} Diserva All rights reserved.
        </div>
        <div>
          You have any problems, our <Link href='#'>support</Link> can help you
        </div>
      </div>
    </div>
  );
  return (
    <footer className={footer}>
      <div>
        {footerMain}
        {footerLegal}
      </div>
    </footer>
  );
}
