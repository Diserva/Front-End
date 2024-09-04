// src/components/ui/Profile/index.tsx

// ! own
// ? styles
import s from './Avatar.module.scss';
// ? src
import { IBaseIconProps } from '../../utils';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
type IProfileAvatarIconProps = IBaseIconProps

export function Avatar({ size }: IProfileAvatarIconProps): JSX.Element {
  const user = useSelector((state: RootState) => state.userReducer)

  return (
    <div style={{ width: size + 6, height: size + 6}} className={s.avatar}>
      <img
        src={`https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}`}
        width={size}
        height={size}
        alt={`${user.username} avatar`}
      />
    </div>
  );
}
