export enum EIconSize {
  Size16 = 16,
  Size24 = 24,
  Size32 = 32,
  Size48 = 48,
  Size52 = 52,
  Size64 = 64,
  Size96 = 96,
  Size128 = 128,
  Size160 = 160,
  Size192 = 192,
  Size256 = 256,
  Size512 = 512,
}

export interface IBaseIconProps {
  size: EIconSize;
}

export enum ESocialMedia {
  github = 'github',
  telegram = 'telegram',
  discord = 'discord',
  threads = 'threads',
  twitter = 'twitter',
  instagram = 'instagram',
}

export interface CardProps {
  guild: IGuild;
}

export interface IGuild {
  id: string;
  name: string;
  icon: string;
  banner: string;
  permissions: number;
  approximate_member_count: number;
  isBot: boolean;
}
