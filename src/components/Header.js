import React, {Fragment} from 'react'
import logo from '../images/logo.png'
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
            <div  className="App-btn-menu">
                <div className="btn-menu" onClick={openMenu}>
                    <span></span>
                </div>
            </div>
            <Link to={"/"} className="img-logo">
              <img className="logo" src={logo} alt=""/>
            </Link>
            <div className="App-menu">
                {itemsMenu.data.map((item) => (
                    <Link key={item.id.toString()} to={`/${item.link}`} className="item">
                        <DefImg width="40px" height="40px" fill="#333333" />
                        <span>{item.nombre}</span>
                    </Link>
                ))}
                <div className="idiomas">
                    Idioma
                </div>
            </div>
            <div className="App-actions">
                <div className="action lang"><IconSearch width="30px" height="30px" fill="#ffffff" /></div>
                <div className="action user"><IconUser width="30px" height="30px" fill="#ffffff" /></div>
                <div className="action lang"><IconFavorite width="30px" height="30px" fill="#ffffff" /></div>
                <div className="action cart"><IconCart width="30px" height="30px" fill="#ffffff" /></div>
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

