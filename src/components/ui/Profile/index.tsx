import Image from 'next/image';
import React from 'react';

import style from './style.module.scss';

import { useUserStore } from '@/store';
import { IBaseIconProps } from '@/utils';

interface ILogoIconProps extends IBaseIconProps {}

export const Profile: React.FC<ILogoIconProps> = ({ size }): JSX.Element => {
  const { username, avatarUrl } = useUserStore();

  return (
    <div>
      <div className={style.box}>
        <p>{username}</p>
        <div className={style.stroke}>
          <Image src={avatarUrl} width={size} height={size} alt={username} />
        </div>
      </div>
    </div>
  );
};
