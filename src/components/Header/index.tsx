import style from "./Header.module.scss"
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { EIconSize } from "src/utils";
import clsx from "clsx";
import AuthFunc from "../../components/Auth";
import { LogoIcon } from "../../components/Logo";
import { Avatar } from "../../components/Avatar";

const Header = () => {
    const userState = useSelector((state: RootState) => state.userReducer);
    
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
                    <Link className={clsx('link', style.navigation__link)} to='/function'>
                        Functions
                    </Link>
                </li>
                <li>
                    <Link className={clsx('link', style.navigation__link)} to='/about-us'>
                        About us
                    </Link>
                </li>
                <li>
                    <Link className={clsx('link', style.navigation__link)} to='/blog'>
                        Blog
                    </Link>
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
                    <div 
                        className={style.auth} 
                        onClick={AuthFunc}>
                        Auth
                    </div>
                )}
            </div>
            </div>
        </header>
    );
}

export default Header;