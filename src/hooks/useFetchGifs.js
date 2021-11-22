import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( categoria ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    
    // //Reemplaza al componentDidMount. Es decir se usa para que se ejecute solo cuando el componente se renderiza la primera vez.
    useEffect( () => {
       getGifs(categoria)
        .then (imgs =>  {
            setState({
                data: imgs,
                loading: false
            });
        })

    }, [categoria]); //Esto hace que si la categoria cambia, vuelve a ejecutar el useEffect.
    
    return state;
}    

