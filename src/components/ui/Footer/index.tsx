// src/components/ui/Footer/index.tsx

// ! lib
// next
import Link from 'next/link';
// clsx
import clsx from 'clsx';

// ! own
// ? styles
import s from './style.module.scss';
// ? src
import { SocialMedia } from '@components';
import { ESocialMedia } from '@utils';

export function Footer(): JSX.Element {
  return (
    <footer className={s.footer}>
      <div className={clsx('container', s.container)}>
        {/* top */}
        <div className={s.top}>
          {/* // TODO добавить ссылки на социальные сети */}
          {/* socialMedia */}
          <article>
            <ul className={clsx('list', s.socialMedia)}>
              <li>
                <Link className={s.socialMedia__link} href={'#'}>
                  <SocialMedia size={32} type={ESocialMedia.github} />
                </Link>
              </li>
              <li>
                <Link className={s.socialMedia__link} href={'#'}>
                  <SocialMedia size={32} type={ESocialMedia.telegram} />
                </Link>
              </li>
              <li>
                <Link className={s.socialMedia__link} href={'#'}>
                  <SocialMedia size={32} type={ESocialMedia.discord} />
                </Link>
              </li>
              <li>
                <Link className={s.socialMedia__link} href={'#'}>
                  <SocialMedia size={32} type={ESocialMedia.threads} />
                </Link>
              </li>
              <li>
                <Link className={s.socialMedia__link} href={'#'}>
                  <SocialMedia size={32} type={ESocialMedia.twitter} />
                </Link>
              </li>
              <li>
                <Link className={s.socialMedia__link} href={'#'}>
                  <SocialMedia size={32} type={ESocialMedia.instagram} />
                </Link>
              </li>
            </ul>
          </article>

          {/* // TODO добавить ссылки на страницы на сайте */}
          {/* links */}
          <ul className={s.blocks}>
            {/* main */}
            <li className={s.block}>
              <h4 className={s.block__title}>Main</h4>
              <nav>
                <ul className={clsx('list', s.block, s.block_gap_small)}>
                  <li>
                    <Link className={clsx('link', s.block__link)} href={'#'}>
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link className={clsx('link', s.block__link)} href={'#'}>
                      About project
                    </Link>
                  </li>
                  <li>
                    <Link className={clsx('link', s.block__link)} href={'#'}>
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
                  <Link className={clsx('link', s.block__link)} href={'#'}>
                    Family Play
                  </Link>
                </li>
                <li>
                  <Link className={clsx('link', s.block__link)} href={'#'}>
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
                    <Link className={clsx('link', s.block__link)} href={'#'}>
                      terms of use
                    </Link>
                  </li>
                  <li>
                    <Link className={clsx('link', s.block__link)} href={'#'}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className={clsx('link', s.block__link)} href={'#'}>
                      Cookies
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>
            {/* developers */}
            <li className={s.block}>
              <h4 className={s.block__title}>Developers</h4>
              <nav>
                <ul className={clsx('list', s.block, s.block_gap_small)}>
                  <li>
                    <Link className={clsx('link', s.block__link)} href={'#'}>
                      iconservator
                    </Link>
                  </li>
                  <li>
                    <Link className={clsx('link', s.block__link)} href={'#'}>
                      chyVacheck
                    </Link>
                  </li>
                  <li>
                    <Link className={clsx('link', s.block__link)} href={'#'}>
                      9yu
                    </Link>
                  </li>
                  <li>
                    <Link className={clsx('link', s.block__link)} href={'#'}>
                      sashujke
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>
          </ul>
        </div>

        {/* bottom */}
        <div className={s.bottom}>
          <h6 className={clsx('text', s.detail)}>
            &copy; 2024 - {new Date().getFullYear()} Diserva All rights
            reserved.
          </h6>
          <p className={clsx('text', s.detail)}>
            You have any problems, our{' '}
            {/* // TODO добавить ссылку на support форму */}
            <Link className={clsx('link', s.support)} href={'#'}>
              support
            </Link>{' '}
            can help you
          </p>
        </div>
      </div>
    </footer>
  );
}
