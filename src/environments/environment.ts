// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const SpotifyConfiguration = {
  clientId: '6e93500e29764d5e8eaacda3dd9c6e47',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    "user-read-currently-playing", //musica tocando agora.
    "user-read-recently-played", //ler musicas tocadas recentemente.
    "user-read-playback-state", //ler estado do player do .
    "user-top-read", //top artist e músicas do usuário
    "user-modify-playback-state",//alterar o player do usuário.
    "user-library-read", // ler biblioteca dos usuários.
    "playlist-read-private", //ler playlists privadas.
    "playlist-read-collaborative" //ler playlists colaboradas.
  ]
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
