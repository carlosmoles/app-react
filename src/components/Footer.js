import React from 'react'
import logo from '../images/logo.png'
import '../css/footer.min.css'
import {Link} from "react-router-dom";

const Footer = () => (
    <footer className="App-footer">
        <Link to={"/"} className="img-logo">
            <img className="logo" src={logo} alt=""/>
        </Link>
        <div className="footer-links">
            <Link to="/condiciones-generales" className="link">Condiciones Generales</Link>
            <Link to="/politica-privacidad" className="link">Política de Privacidad </Link>
            <Link to="/politica-cookies" className="link">Política de Cookies</Link>
        </div>
    </footer>
)

export default Footer