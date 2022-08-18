export const environment = {
  production: true
};


export const SpotifyConfiguration = {
  clientID: '6e93500e29764d5e8eaacda3dd9c6e47',
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