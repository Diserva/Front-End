const AuthFunc = () => {
  const discordAuthUrl =
    'https://discord.com/oauth2/authorize?client_id=1168642212997894276&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=identify+guilds+guilds.members.read';
  window.location.href = discordAuthUrl
}

export default AuthFunc;