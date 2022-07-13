const API_KEY = 'IHCuIjRfIn0IdLQWDLgADgSMPhRms0T7';


export default async function getGifs(keyword) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
    const res = await fetch(apiUrl);
    const response = await res.json();
    const { data } = response;
    const gifs = data.map(gif => {
        const { url } = gif.images.downsized_medium;
        const { title, id, images } = gif;
        return { url, title, id, images };
    });
    return gifs;
}