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
    return (
    <Fragment>
        <header className="App-header">
            <Link to={"/"} className="App-logo">
              <img className="logo" src={logo} alt=""/>
            </Link>
            <div className="App-menu">
                <div className="itemsMenu">
                    {itemsMenu.data.map((item) => (
                        <Link key={item.id.toString()} to={`/${item.link}`} className="item">
                            <DefImg className="iconItem" width="40px" height="40px" fill="#333333" />
                            <span className="nomItem">{item.nombre}</span>
                        </Link>
                    ))}
                </div>
                <div className="idiomas">
                    <div className="idioma" data-idioma="1">ES</div>
                    <div className="idioma" data-idioma="2">PT</div>
                </div>
            </div>
            <div className="App-buscador">
                <div className="buscador"><IconSearch width="30px" height="30px" fill="#2a8daa" /></div>
            </div>

            <div className="App-action">
                <div className="action"><IconUser width="30px" height="30px" fill="#2a8daa" /></div>
            </div>
            <div className="">
                <div className="action"><IconCart width="30px" height="30px" fill="#2a8daa" /></div>
                <div className="action"><IconFavorite width="30px" height="30px" fill="#2a8daa" /></div>
                <div  className="App-btn-menu">
                    <div className="btn-menu" onClick={openMenu}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    </Fragment>
    )
    function openMenu(e){
        e.preventDefault();
        document.querySelector('.btn-menu').classList.toggle('clicked');
        document.querySelector('.App-menu').classList.toggle('show');
    }
}

export default Header

