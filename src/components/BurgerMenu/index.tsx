import React, { useState } from 'react';
import style from './Burger.module.scss';
import TranslateIcon from '../../assets/icons/Translate.svg';
import NightIcon from '../../assets/icons/Night.svg';
import DayIcon from '../../assets/icons/Day.svg';
import ErrorIcon from '../../assets/icons/Error.svg';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { languageNames } from 'src/utils';

interface ModalProps {
  isOpen: boolean;
}

const BurgerMenu: React.FC<ModalProps> = ({ isOpen }) => {
  const [language, setLanguage] = useState<any>(
    localStorage.getItem('i18nextLng')
  );
  const [theme, setTheme] = useState<string>('dark');
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage)
    i18n.changeLanguage(newLanguage)
  };

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <>
      {isOpen && (
        <div className={style.burgermenu__content}>
          <ul>
            <li>
              <img className={style.icon} src={TranslateIcon} alt='icon' />
              {t('modal.editlang')}
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                {languageNames.map((lng) => (
                  <option value={lng.value}>{lng.name}</option>
                ))}
              </select>
            </li>
            <li onClick={toggleTheme}>
              {theme === 'dark' ? (
                <img className={style.icon} src={NightIcon} alt='icon' />
              ) : (
                <img className={style.icon} src={DayIcon} alt='icon' />
              )}
              {t('modal.switch')}{' '}
              {theme === 'dark' ? t('modal.light') : t('modal.dark')}{' '}
              {t('modal.theme')}
            </li>
            <hr />
            <li onClick={() => navigate('/support')}>
              <img className={style.icon} src={ErrorIcon} alt='icon' />
              {t('modal.needhelp')}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
