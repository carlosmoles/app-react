import React from 'react'
import {useParams} from "react-router-dom";

const Categoria = () => {
    let {categoria} = useParams();
    return (
     <div className="content-principal"> Categoria</div>
    )
}

export default Categoria