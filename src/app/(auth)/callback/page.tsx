'use client';

import axios from 'axios';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUserStore } from '@/store';

const CallbackPage = () => {
  const router = useRouter();
  const { setUser } = useUserStore();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const CLIENT_ID = '1139259244122751027';
  const CLIENT_SECRET = 'iTKReUgsjYZByI8qyVjUS3LnhAyb9VaO';
  const REDIRECT_URI = 'http://localhost:3000/callback';

  useEffect(() => {
    const fetchData = async () => {
      if (!code) {
        router.push('/auth');
        return; // выход из функции, если нет кода
      }

      const body = new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
        scope: 'identify+guilds',
      }).toString();

      try {
        // Получение токена
        const getToken = await axios.post(
          'https://discord.com/api/oauth2/token',
          body,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        const data = getToken.data;
        if (data.access_token) {
          // Получение юзера
          const [userData, guildsData] = await axios.all([
            axios.get(
              `http://localhost:4000/api/auth/discord/${data.access_token}`,
              { withCredentials: true }
            ),
            axios.get(`http://localhost:4000/api/user/guilds`, {
              withCredentials: true,
            }),
          ]);
          const user = userData.data;
          const guilds = guildsData.data;

          console.log(user);
          console.log(guilds);

          setUser(user); // Сохранение пользователя в состояние
          router.push('/'); // Редирект на главную страницу
        }
      } catch (error) {
        console.error(error);
        router.push('/auth'); // Редирект на страницу авторизации в случае ошибки
      }
    };

    fetchData();
  }, [code]); // Добавлены зависимости

  return <div>CallbackPage</div>;
};

export default CallbackPage;
