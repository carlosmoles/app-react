import React from 'react'
import '../css/errors.min.css'
import FatalErrorImg from '../images/500.png'

const FatalError = () => (
    <div className="text-center">
        <h1 className="error_text">Error: 500 Error al recibir datos del Servidor</h1>
        <img src={FatalErrorImg} alt="500 Error de Servidor" className="error_image"/>
    </div>
)

export default FatalError