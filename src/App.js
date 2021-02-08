import React, { Component } from 'react';
import Home from './Home'
import logo from './images/logo.png';
import './css/app.min.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {addClass: false}
    }
    toggle() {
        this.setState({addClass: !this.state.addClass});
    }
    render() {
        let activeMenu = ["btn-menu"];
        if(this.state.addClass) {
            activeMenu.push('clicked');
        }
        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-btn-menu">
                        <div className={activeMenu.join(' ')} onClick={this.toggle.bind(this)}><span></span></div>
                    </div>
                    <div className="App-logo">
                        <img className="logo" src={logo} alt=""/>
                    </div>
                    <div className="App-menu">
                        <div clasName="item">Item Menu</div>
                        <div clasName="item">Item Menu</div>
                        <div clasName="item">Item Menu</div>
                        <div clasName="item">Item Menu</div>
                        <div clasName="item">Item Menu</div>
                        <div clasName="item">Item Menu</div>
                    </div>
                    <div className="App-actions">
                        <div clasName="user">Usuario</div>
                        <div clasName="cart">Carrito</div>
                        <div clasName="lang">Idioma</div>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;