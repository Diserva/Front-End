import clsx from 'clsx';

// ! own
// ? styles
import s from './Footer.module.scss';
// ? src
import { SocialMedia } from '../SocialMedia';
import { ESocialMedia } from '../../utils';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer(): JSX.Element {
  const { t } = useTranslation();
  return (
    <footer className={s.footer}>
      <div className={clsx('container', s.container)}>
        <div className={s.top}>
          <article>
            <ul className={clsx('list', s.socialMedia)}>
              <li>
                <Link
                  className={s.socialMedia__link}
                  to={process.env.REACT_APP_SOCIAL_GITHUB_URI || ''}
                >
                  <SocialMedia size={32} type={ESocialMedia.github} />
                </Link>
              </li>
              <li>
                <Link
                  className={s.socialMedia__link}
                  to={process.env.REACT_APP_SOCIAL_TELEGRAM_URI || ''}
                >
                  <SocialMedia size={32} type={ESocialMedia.telegram} />
                </Link>
              </li>
              <li>
                <Link
                  className={s.socialMedia__link}
                  to={process.env.REACT_APP_SOCIAL_DISCORD_URI || ''}
                >
                  <SocialMedia size={32} type={ESocialMedia.discord} />
                </Link>
              </li>
              <li>
                <Link
                  className={s.socialMedia__link}
                  to={process.env.REACT_APP_SOCIAL_THREADS_URI || ''}
                >
                  <SocialMedia size={32} type={ESocialMedia.threads} />
                </Link>
              </li>
              <li>
                <Link
                  className={s.socialMedia__link}
                  to={process.env.REACT_APP_SOCIAL_TWITTER_URI || ''}
                >
                  <SocialMedia size={32} type={ESocialMedia.twitter} />
                </Link>
              </li>
              <li>
                <Link
                  className={s.socialMedia__link}
                  to={process.env.REACT_APP_SOCIAL_INSTAGRAM_URI || ''}
                >
                  <SocialMedia size={32} type={ESocialMedia.instagram} />
                </Link>
              </li>
            </ul>
          </article>
          <ul className={s.blocks}>
            <li className={s.block}>
              <h4 className={s.block__title}>{t('footer.main')}</h4>
              <nav>
                <ul className={clsx('list', s.block, s.block_gap_small)}>
                  <li>
                    <Link
                      className={clsx('link', s.block__link)}
                      to={'/about-us'}
                    >
                      {t('footer.about-us')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={clsx('link', s.block__link)}
                      to={'/about-project'}
                    >
                      {t('footer.about-project')}
                    </Link>
                  </li>
                  <li>
                    <Link className={clsx('link', s.block__link)} to={'#'}>
                      {t('footer.buy-coffee')}
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>
            <li className={s.block}>
              <h4 className={s.block__title}>{t('footer.partners')}</h4>
              <ul className={clsx('list', s.block, s.block_gap_small)}>
                <li>
                  <Link
                    className={clsx('link', s.block__link)}
                    to={process.env.REACT_APP_SPONSOR1_URI || ''}
                  >
                    {process.env.REACT_APP_SPONSOR1_NAME}
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx('link', s.block__link)}
                    to={process.env.REACT_APP_SPONSOR2_URI || ''}
                  >
                    {process.env.REACT_APP_SPONSOR2_NAME}
                  </Link>
                </li>
              </ul>
            </li>
            {/* legal */}
            <li className={s.block}>
              <h4 className={s.block__title}>{t('footer.legal')}</h4>
              <nav>
                <ul className={clsx('list', s.block, s.block_gap_small)}>
                  <li>
                    <Link
                      className={clsx('link', s.block__link)}
                      to={'/terms-of-use'}
                    >
                      {t('footer.terms-of-use')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={clsx('link', s.block__link)}
                      to={'/privacy-policy'}
                    >
                      {t('footer.privacy-policy')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={clsx('link', s.block__link)}
                      to={'/cookies'}
                    >
                      {t('footer.cookies')}
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>
            <li className={s.block}>
              <h4 className={s.block__title}>{t('footer.developers')}</h4>
              <nav>
                <ul className={clsx('list', s.block, s.block_gap_small)}>
                  <li>
                    <Link className={clsx('link', s.block__link)} to={'#'}>
                      iconservator
                    </Link>
                  </li>
                  <li>
                    <Link className={clsx('link', s.block__link)} to={'#'}>
                      chyVacheck
                    </Link>
                  </li>
                  <li>
                    <Link className={clsx('link', s.block__link)} to={'#'}>
                      sashujke
                    </Link>
                  </li>
                  <li>
                    <Link className={clsx('link', s.block__link)} to={'#'}>
                      kurumi
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>
          </ul>
        </div>
        <div className={s.bottom}>
          <h6 className={clsx('text', s.detail)}>
            &copy; 2024 - {new Date().getFullYear()} Diserva All rights
            reserved.
          </h6>
          <p className={clsx('text', s.detail)}>
            {t('footer.support1')}{' '}
            <Link className={clsx('link', s.support)} to={'/support'}>
              {t('footer.support2')}
            </Link>{' '}
            {t('footer.support3')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
