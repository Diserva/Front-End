// src/components/button/Button.tsx

// ? lib
import clsx from 'clsx';

// ? styles
import s from './styles.module.css';

export function Button(): JSX.Element {
  return <button className={clsx(s.main)}>test</button>;
}
