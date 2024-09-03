import clsx from 'clsx';

// ! own
// ? styles
import s from './Footer.module.scss';
// ? src
import { SocialMedia } from '../SocialMedia';
import { ESocialMedia } from '../../utils';
import { Link } from 'react-router-dom';

function Footer(): JSX.Element {
  return (
    <footer className={s.footer}>
      <div className={clsx('container', s.container)}>
        <div className={s.top}>
          <article>
            <ul className={clsx('list', s.socialMedia)}>
              <li>
                <Link className={s.socialMedia__link} to={'#'}>
                  <SocialMedia size={32} type={ESocialMedia.github} />
                </Link>
              </li>
              <li>
                <Link className={s.socialMedia__link} to={'#'}>
                  <SocialMedia size={32} type={ESocialMedia.telegram} />
                </Link>
              </li>
              <li>
                <Link className={s.socialMedia__link} to={'#'}>
                  <SocialMedia size={32} type={ESocialMedia.discord} />
                </Link>
              </li>
              <li>
                <Link className={s.socialMedia__link} to={'#'}>
                  <SocialMedia size={32} type={ESocialMedia.threads} />
                </Link>
              </li>
              <li>
                <Link className={s.socialMedia__link} to={'#'}>
                  <SocialMedia size={32} type={ESocialMedia.twitter} />
                </Link>
              </li>
              <li>
                <Link className={s.socialMedia__link} to={'#'}>
                  <SocialMedia size={32} type={ESocialMedia.instagram} />
                </Link>
              </li>
            </ul>
          </article>
          <ul className={s.blocks}>
            <li className={s.block}>
              <h4 className={s.block__title}>Main</h4>
              <nav>
                <ul className={clsx('list', s.block, s.block_gap_small)}>
                  <li>
                    <Link
                      className={clsx('link', s.block__link)}
                      to={'/about-us'}
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={clsx('link', s.block__link)}
                      to={'/about-project'}
                    >
                      About project
                    </Link>
                  </li>
                  <li>
                    <Link className={clsx('link', s.block__link)} to={'#'}>
                      {' '}
                      {/* Link donation Alerts */}
                      Buy us a coffee
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>
            {/* partners */}
            <li className={s.block}>
              <h4 className={s.block__title}>Partners</h4>
              <ul className={clsx('list', s.block, s.block_gap_small)}>
                <li>
                  <Link className={clsx('link', s.block__link)} to={'#'}>
                    {' '}
                    {/* Link Sponsor 1 */}
                    Family Play
                  </Link>
                </li>
                <li>
                  <Link className={clsx('link', s.block__link)} to={'#'}>
                    {' '}
                    {/* Link Sponsor 2 */}
                    Strategy World
                  </Link>
                </li>
              </ul>
            </li>
            {/* legal */}
            <li className={s.block}>
              <h4 className={s.block__title}>Legal</h4>
              <nav>
                <ul className={clsx('list', s.block, s.block_gap_small)}>
                  <li>
                    <Link
                      className={clsx('link', s.block__link)}
                      to={'/terms-of-use'}
                    >
                      terms of use
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={clsx('link', s.block__link)}
                      to={'/privacy-policy'}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={clsx('link', s.block__link)}
                      to={'/cookies'}
                    >
                      Cookies
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>
            <li className={s.block}>
              <h4 className={s.block__title}>Developers</h4>
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
            You have any problems, our{' '}
            <Link className={clsx('link', s.support)} to={'/support'}>
              support
            </Link>{' '}
            can help you
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
