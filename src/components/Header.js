import React, {Fragment} from 'react'
import logo from '../images/logos/logo.jpg'
import { ReactComponent as IconCart } from '../images/iconos/shopping_cart.svg'
import { ReactComponent as IconFavorite } from '../images/iconos/favorite.svg'
import { ReactComponent as IconUser }  from '../images/iconos/user.svg'
import { ReactComponent as IconSearch }  from '../images/iconos/search.svg'
import { ReactComponent as DefImg } from '../images/logos/image.svg';
import '../css/header.min.css'
import {Link} from "react-router-dom";

const Header = ({itemsMenu}) => {
    function openMenu(event){
        event.preventDefault();
        document.querySelector('.btn-menu').classList.toggle('clicked');
        document.querySelector('.App-menu').classList.toggle('show');
    }
    return (
    <Fragment>
        <header className="App-header">
            <div className="App-topBar blue">
                <div className="App-soporte">
                    <Link to={"/"} className="btn-bar">SERVICIO TÉCNICO</Link>
                    <Link to={"/"} className="btn-normal">ES</Link>
                    <hr className="separador"></hr>
                    <Link to={"/"} className="btn-normal">PT</Link>
                </div>
                <div className="App-actions">
                    <p className="horario">L-V:9:00h a 13:30h / 15:00h a 18:30h</p>
                    <div className="btn-bar action buscador"><IconSearch width="30px" height="30px" fill="#2a8daa" /> <span>Buscar</span></div>
                    <div className="btn-normal action"><IconFavorite width="30px" height="30px" fill="#2a8daa" /></div>
                    <div className="btn-normal action cuenta"><IconUser width="30px" height="30px" fill="#2a8daa" /> <span>Mi Cuenta</span></div>
                    <div className="btn-normal action carrito"><IconCart width="30px" height="30px" fill="#2a8daa" /><span>Mi Carrito</span></div>
                    <div  className="App-btn-menu">
                        <div className="btn-menu" onClick={openMenu}>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="App-logo">
                <Link to={"/"} className="Link-logo">
                    <img className="logo" src={logo} alt=""/>
                </Link>
            </div>
            <div className="App-menu">
                <div className="itemsMenu">
                    {itemsMenu.data.map((item) => (
                        <Fragment>
                            <Link key={item.id.toString()} to={`/${item.link}`} className="item">
                                <DefImg className="iconItem" width="40px" height="40px" fill="#333333"/>
                                <span data-value={item.id} className="nomItem">{item.nombre}</span>
                                <div className="subItems" data-item={item.id}>
                                    {item.subitems.map((subitem) =>(
                                        <Link className="subItem" key={subitem.idCategoria.toString()}>
                                            <span className="nomSubItem">{subitem.nombreCat}</span>
                                        </Link>
                                    ))}
                                </div>
                            </Link>
                        </Fragment>
                    ))}
                </div>

                <div className="idiomas">
                    <div className="idioma" data-idioma="1">ES</div>
                    <div className="idioma" data-idioma="2">PT</div>
                </div>
            </div>
        </header>
    </Fragment>
    )
}

export default Header

