export const getGifs = async (category)=> {
    const apiKey = 'KIahMrRUL4MbnysTbeDvBWsstbTs1BEf';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/search?q==${ encodeURI(category) }&limit=10&api_key=${apiKey}`);
    const { data } = await resp.json();

    const gifs =  data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    })

    return(gifs);
}