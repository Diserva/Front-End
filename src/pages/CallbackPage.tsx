/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setUser, UserState } from '../redux/reducers/userReducer';
import { useAlert } from '../components/Alert/context';

const CallbackPage: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');
  const { showAlert } = useAlert();

  useEffect(() => {
    const fetchData = async () => {
        if (!code) {
          return;
        }

        const body = new URLSearchParams({
          client_id: process.env.REACT_APP_CLIENT_ID!,
          client_secret: process.env.REACT_APP_CLIENT_SECRET!,
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: process.env.REACT_APP_REDIRECT_URI!,
          scope: 'identify+guilds',
        }).toString();

        try {
            const response = await fetch('https://discord.com/api/oauth2/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: body
            });

            const data = await response.json();
            const token = data.access_token
            if (token) {
              const response = await fetch(`http://localhost:4000/api/auth/discord/${token}`, 
                { 
                  method: 'GET', 
                  credentials: 'include'
                }) //backend

              const user: UserState = await response.json()
              dispatch(setUser({
                discordId: user.discordId,
                username: user.username,
                avatar: user.avatar,
                status: user.status,
                permission: user.permission,
                globalName: user.globalName,
                locale: user.locale,
                isAuth: true
              }));

              navigate('/')
            }
        } catch (error) {
          showAlert('Ошибка при авторизации');
          console.log(error)
        }
    };
    fetchData();
  }, [code])

  return (
    <div>
    </div>
  );
}

export default CallbackPage;