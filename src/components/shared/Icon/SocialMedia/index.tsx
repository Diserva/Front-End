// src/components/shared/Icon/SocialMedia/index.ts

import Image from 'next/image';

import gitHubSvg from '@social-media/github.svg';
import telegramSvg from '@social-media/telegram.svg';
import discordSvg from '@social-media/discord.svg';
import threadsSvg from '@social-media/threads.svg';
import twitterSvg from '@social-media/twitter.svg';
import instagramSvg from '@social-media/instagram.svg';

import { IBaseIconProps, ESocialMedia } from '@utils';

const data = {
  github: { src: gitHubSvg, name: 'GitHub' },
  telegram: { src: telegramSvg, name: 'Telegram' },
  discord: { src: discordSvg, name: 'Discord' },
  threads: { src: threadsSvg, name: 'Threads' },
  twitter: { src: twitterSvg, name: 'Twitter' },
  instagram: { src: instagramSvg, name: 'Instagram' },
};

interface ISocialMediaProps extends IBaseIconProps {
  type: ESocialMedia;
}

export function SocialMedia({ type, size }: ISocialMediaProps): JSX.Element {
  return (
    <Image
      width={size}
      height={size}
      src={data[type].src}
      alt={`${data[type].name} logotype`}
    />
  );
}
