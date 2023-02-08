module.exports = ({ env }) => ({
  host: env('HOST', 'https://1337-naaman10-checkmirrorsjs-fxhtvnxrot4.ws-eu85.gitpod.io/'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
