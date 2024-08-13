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
        <Image src={discord} width={32} height={32} alt='discord'></Image>
        <Image src={email} width={32} height={32} alt='email'></Image>
        <Image src={github} width={32} height={32} alt='github'></Image>
        <Image src={instagram} width={32} height={32} alt='instagram'></Image>
        <Image src={telegram} width={32} height={32} alt='telegram'></Image>
        <Image src={twitter} width={32} height={32} alt='twitter'></Image>
      </div>
      <nav>
        <div>
          <div>Головне</div>
          <ul>
            <div>Про нас</div>
          </ul>
        </div>
        <div>
          <div>Партнери</div>
          <ul>
            <div>Family Play</div>
            <div>Strategy World</div>
          </ul>
        </div>
        <div>
          <div>Довідник</div>
          <ul>
            <div>Умови Користування</div>
            <div>Політика конфіденційності</div>
            <div>Cookies</div>
          </ul>
        </div>
        <div>
          <div>Розробники</div>
          <ul>
            <div>iconservator</div>
            <div>Viva</div>
            <div>chyVacheck</div>
            <div>Danya</div>
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
