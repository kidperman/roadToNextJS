'use client'  //INDICANDO QUE EL COMPONENTE NECESITA USAR CLIENTE
//SIEMPRE ES IMPORTANTE QUE EL CLIENTE MAS PEQUEÑO SEA EL DE RENDER EN CLIENTE

import { useState } from "react"

export function LikeButton({id}){
    const [liked, setLiked] = useState(false); 

    return(
        <button onClick={() => setLiked(!liked)}>
            {liked ? '❤️':'🤍'}
        </button>
        
    )
}