import  { useEffect, useState} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGif = (category) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        getGifs(category).then( (img) => {
            setData(img);
            setLoading(false);
        });
    }, [category])

    return {loading, data};
}

