export interface IMusica {
    id: string,
    titulo: string,
    artista: {
        id:string,
        nome:string
    }[],
    album: {
        id:string,
        nome:string,
        imagemUrl:string
    }
    tempo: string
}