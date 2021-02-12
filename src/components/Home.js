import React from 'react'
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/home.min.css'

const Home = () => {
    return(
        <div className="content-principal">
            <div className="slideHome">
                <OwlCarousel items={1} className="owl-theme" loop nav  margin={8}>
                    <div><img className="slideImg" src= {require('../images/logos/image.svg').default} alt="image slide"/></div>
                    <div><img className="slideImg" src= {require('../images/logos/image.svg').default} alt="image slide 2"/></div>
                    <div><img className="slideImg" src= {require('../images/logos/image.svg').default} alt="image slide 3"/></div>
                </OwlCarousel>
            </div>
            <section className="section">

            </section>
        </div>
    )
}

export default Home