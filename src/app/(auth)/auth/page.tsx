'use client';

import React from 'react';

import style from './style.module.scss';

const AuthPage = () => {
  const handleAuth = () => {
    const discordAuthUrl =
      'https://discord.com/oauth2/authorize?client_id=1139259244122751027&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=identify+guilds+guilds.members.read';
    window.location.href = discordAuthUrl;
  };
  return (
    <div className={style.box}>
      <p className={style.title}>AuthPage</p>
      <div className={style.center}>
        <button onClick={handleAuth} className={style.button}>
          Auth
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
