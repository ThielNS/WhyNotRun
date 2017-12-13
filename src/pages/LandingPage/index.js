import React from "react";
import {Link} from "react-router-dom";

import Footer from "../../components/Footer"
import Publication from "../../images/publication.png";
import Technologies from "../../images/technologies.png";

import './landingpage.scss';

const LandingPage = () => {
    return (
        <div className="content-landingpage">
            <section className="presentation">
                <div className="content-btn-register">
                    <h2 className="presentation-content"> Falar mal de uma tecnologia nunca foi tão legal. Faça parte dessa comunidade! </h2>
                    <Link to='/register' className="button -second"><i  className="fa fa-address-card-o link-register"/>Registrar-se</Link>
                </div>
            </section>
            <section className="publication">
                <div className="publication-content">
                    <h3>É muito simples falar mal</h3>
                    <p>Lorem Ipsum dolor</p>
                    <div className="content-publication">
                        <img src={Publication} alt="publication" />
                    </div>
                </div>
            </section>
            <section className="technologies">
                <div className="technologies-content">
                    <h3>Tecnologias mais odiadas</h3>
                    <p>Lorem Ipsum dolor</p>
                    <div>
                        <img src={Technologies} alt="publication" />
                    </div>
                </div>
            </section>
            <div className="content-footer">
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage;