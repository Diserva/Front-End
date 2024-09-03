import React, { useEffect } from 'react';
import style from './Alert.module.scss';

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {

  useEffect(() => {
    const timeoutId = setTimeout(onClose, 5000);
    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return (
    <div className={style.overlay}>
      <div className={style.alertBox}>
        <p className={style.message}>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
