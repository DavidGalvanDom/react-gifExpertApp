import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const {loading, data: images} = useFetchGif(category);
   
    return (
        <>
            <h1>{category}</h1>

            {loading && <p>Cargando datos...</p>}

            <div className="card-grid">
                {
                    images.map( ( img ) => (
                        <GifGridItem 
                            key={ img.id } 
                            { ...img }
                        />
                        )
                    )
                }
                
            </div>
        </>
    )
}
