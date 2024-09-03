import style from "./Header.module.scss"
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { EIconSize } from "src/utils";
import clsx from "clsx";
import AuthFunc from "../../components/Auth";
import { LogoIcon } from "../../components/Logo";
import { Avatar } from "../../components/Avatar";
import { useEffect, useState } from "react";
import { useAlert } from "../../components/Alert/context";

const Header = () => {
    const userState = useSelector((state: RootState) => state.userReducer);
    const [postCount, setPostCount] = useState<number | string | null>(null);
    const { showAlert } = useAlert();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URI}/devposts/recent`,
            {
              credentials: 'include',
            }
          );
          const count = await response.json();

          if (count === 0) {
            setPostCount(null);
          } else if (count >= 10) {
            setPostCount('+9');
          } else {
            setPostCount(count);
          }
        } catch (error) {
          showAlert(`Error fetching posts: ${error}`);
          setPostCount(null);
        }
      }
      fetchData();
    }, [])
    
    return (
      <header className={style.header}>
        <div className={clsx('container', style.container)}>
          <Link to='/'>
            <div className={style.logo}>
              <LogoIcon size={EIconSize.Size32} />
              <h2>CEAVEX</h2>
            </div>
          </Link>
          <nav className={style.navigation}>
            <ul className={style.navigation__list}>
              <li>
                <Link className={clsx('link', style.navigation__link)} to='/'>
                  Main
                </Link>
              </li>
              <li>
                <Link
                  className={clsx('link', style.navigation__link)}
                  to='/function'
                >
                  Functions
                </Link>
              </li>
              <li>
                <Link
                  className={clsx('link', style.navigation__link)}
                  to='/about-us'
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className={clsx('link', style.navigation__link)}
                  to='/blog'
                >
                  Blog
                </Link>
                { postCount && <a className={style.counter_blog}>{postCount}</a> }
              </li>
            </ul>
          </nav>
          <div>
            {userState.isAuth ? (
              <div className={style.profile}>
                <h6 className={style.nickname}>{userState.username}</h6>
                <Avatar size={EIconSize.Size32} />
              </div>
            ) : (
              <div className={style.auth} onClick={AuthFunc}>
                Auth
              </div>
            )}
          </div>
        </div>
      </header>
    );
}

export default Header;