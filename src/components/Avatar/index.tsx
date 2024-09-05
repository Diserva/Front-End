// src/components/ui/Profile/index.tsx

// ! own
// ? styles
import s from './Avatar.module.scss';
// ? src
import { EIconSize } from '../../utils';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
type IProfileAvatarIconProps = {
  size: EIconSize;
  func?: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Avatar({ size, func }: IProfileAvatarIconProps): JSX.Element {
  const user = useSelector((state: RootState) => state.userReducer);

  const handleClick = () => {
    if (func) {
      func((prev) => !prev);
    }
  };

  return (
    <div style={{ width: size + 6, height: size + 6 }} className={s.avatar}>
      <img
        onClick={handleClick}
        src={`https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}`}
        width={size}
        height={size}
        alt={`${user.username} avatar`}
      />
    </div>
  );
}
