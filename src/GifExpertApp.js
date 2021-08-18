import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {
    //const categories = ['One Puch', 'Samurai X', 'Full Metal Alchemist', 'Dragon Ball']
    const [categories, setCategories] = useState(['Full Metal Alchemist'])

    // const handleAdd = () => {
    //     setCategories( [...categories, 'Hunter X Hunter'] );
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp;
