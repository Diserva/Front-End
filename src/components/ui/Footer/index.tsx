import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { wrapper, container, main, social, legal } from './style.module.scss';

import discord from '@assets/discord.svg';
import email from '@assets/email.svg';
import github from '@assets/github.svg';
import instagram from '@assets/instagram.svg';
import telegram from '@assets/telegram.svg';
import twitter from '@assets/twitter.svg';

export function Footer() {
  const footerMain = (
    <div className={main}>
      <div className={social}>
        <Link href='#'>
          <Image src={discord} width={32} height={32} alt='discord' />
        </Link>
        <Link href='#'>
          <Image src={email} width={32} height={32} alt='email' />
        </Link>
        <Link href='#'>
          <Image src={github} width={32} height={32} alt='github' />
        </Link>
        <Link href='#'>
          <Image src={instagram} width={32} height={32} alt='instagram' />
        </Link>
        <Link href='#'>
          <Image src={telegram} width={32} height={32} alt='telegram' />
        </Link>
        <Link href='#'>
          <Image src={twitter} width={32} height={32} alt='twitter' />
        </Link>
      </div>
      <nav>
        <div>
          <div>Головне</div>
          <ul>
            <Link href='#'>Про нас</Link>
          </ul>
        </div>
        <div>
          <div>Партнери</div>
          <ul>
            <Link href='#'>Family Play</Link>
            <Link href='#'>Strategy World</Link>
          </ul>
        </div>
        <div>
          <div>Довідник</div>
          <ul>
            <Link href='#'>Умови Користування</Link>
            <Link href='#'>Політика конфіденційності</Link>
            <Link href='#'>Cookies</Link>
          </ul>
        </div>
        <div>
          <div>Розробники</div>
          <ul>
            <Link href='#'>iconservator</Link>
            <Link href='#'>Viva</Link>
            <Link href='#'>chyVacheck</Link>
            <Link href='#'>Danya</Link>
          </ul>
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
    <div className={wrapper}>
      <div className={container}>
        {footerMain}
        {footerLegal}
      </div>
    </div>
  );
}
