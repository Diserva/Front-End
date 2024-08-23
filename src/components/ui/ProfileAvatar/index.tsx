// src/components/ui/Profile/index.tsx

import Image from 'next/image';
import { FC } from 'react';

import style from './style.module.scss';

import { useUserStore } from '@store';
import { IBaseIconProps } from '@utils';

interface IProfileAvatarIconProps extends IBaseIconProps {}

export const ProfileAvatar: FC<IProfileAvatarIconProps> = ({
  size,
}): JSX.Element => {
  const { username, avatarUrl } = useUserStore();

  return (
    <div>
      <div className={style.box}>
        <p>{username}</p>
        <div className={style.stroke}>
          <Image
            src={avatarUrl}
            width={size}
            height={size}
            alt={`${username} avatar`}
          />
        </div>
      </div>
    </div>
  );
};
