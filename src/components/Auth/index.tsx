const AuthFunc = () => {
  window.location.href = process.env.REACT_APP_DISCORD_AUTH_URI || '';
}

export default AuthFunc;