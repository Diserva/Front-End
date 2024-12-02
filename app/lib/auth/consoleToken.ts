
export default function consoleToken(token: Promise<string>) {
      token.then(token => console.log({token}))
}