
import React, {useState} from 'react';
import { AddCategory } from './component/AddCategory';
import { GifGrid } from './component/GifGrid';

const GitExpertApp = () => {
    const initialState = [''];
    const [catagorias, setCategorias] = useState(initialState)

    const handleAdd = (data) => {
            setCategorias(
               [data,...catagorias]
            );
    };

    return(
    <>
        <h2>GitExpertApp</h2>
        <hr />
        <AddCategory setCatagories={handleAdd} />
        
        <ol>
            { catagorias.map((categoria,idx) => 
                    <GifGrid 
                        key={categoria} 
                        category={categoria} />
            )}

        </ol>
    </>
    );
}

export default GitExpertApp;