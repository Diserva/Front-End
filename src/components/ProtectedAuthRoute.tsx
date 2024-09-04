/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/reducers/userReducer';
import { RootState } from '../redux/store';
import { useAlert } from './Alert/context';
import AuthFunc from './Auth';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedAuthRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: RootState) => state.userReducer);
  const { showAlert } = useAlert();

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuth) {
        setIsAuthenticated(true);
        return;
      }

      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URI}/auth/`,
          {
            credentials: 'include',
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          dispatch(
            setUser({
              discordId: data.discordId,
              username: data.username,
              avatar: data.avatar,
              status: data.status,
              permission: data.permission,
              globalName: data.globalName,
              locale: data.locale,
              isAuth: true,
            })
          );
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          AuthFunc();
        }
      } catch (error) {
        showAlert(`Ошибка при проверке токена: ${error}`);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Загрузка...</div>;
  }

  return isAuthenticated ? <>{children}</> : <div>3423432434324</div>;
};

export default ProtectedAuthRoute;