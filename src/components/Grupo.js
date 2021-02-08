import React from 'react'
import {useParams} from "react-router-dom";

const Grupo = () => {
    let {grupo} = useParams();
    return(
        <div className="content-principal"> {grupo} </div>
    )
}

export default Grupo