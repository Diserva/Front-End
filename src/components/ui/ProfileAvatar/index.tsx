// src/components/ui/Profile/index.tsx

// ! lib
import Image from 'next/image';

// ! own
// ? styles
import s from './style.module.scss';
// ? src
import { useUserStore } from '@store';
import { IBaseIconProps } from '@utils';

interface IProfileAvatarIconProps extends IBaseIconProps {}

export function ProfileAvatar({ size }: IProfileAvatarIconProps): JSX.Element {
  const { username, avatarUrl } = useUserStore();

  return (
    <div className={s.avatar}>
      <Image
        src={avatarUrl}
        width={size}
        height={size}
        alt={`${username} avatar`}
      />
    </div>
  );
}
