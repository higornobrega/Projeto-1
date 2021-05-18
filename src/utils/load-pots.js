export const loadPost = async () => {
    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts'); //Usa fetch para poder ir até a API e buscar os dados
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos'); //Usa fetch para poder ir até a API e buscar os dados

    const [posts, photos] = await Promise.all([postResponse, photosResponse]); //Coloca os dados de postResponse e photosResponse em posts e photos respectivamente (await é para esperar a promese terminar para continuar)

    const postsJson = await posts.json(); //Converter para json (await espera a linha terminar)
    const photosJson = await photos.json(); //Converter para json (await esperar a promese retorna)

    const postsAndPhotos = postsJson.map((post, index)=>{
      return{...post, cover: photosJson[index].url}
    }); //Para cada post (indice) pega uma url e coloca no cover

    return postsAndPhotos;
}