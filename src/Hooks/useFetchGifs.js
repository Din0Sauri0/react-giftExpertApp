import { useEffect, useState } from "react";
import getGifs from '../Helpers/getGifs'

const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        
        getGifs(category).then( img => setState({
            data: img,
            loading: false
        }));

    }, [category]); //Si cambia la categoria se dispara el useEffect (Eso hace referencia el segundo argumento, no lo tiene se disparara siempre)

    return state;
}

export default useFetchGifs;