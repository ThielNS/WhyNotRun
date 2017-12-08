import React from "react";
import Footer from "../../components/Footer"

import './style.scss';

const LandingPage = () => {
    return (
        <div className="content-landingpage">
            <section className="presentation">
                <p className="presentarion-content"> Falar mal de uma tecnologia nunca foi tão legal. Faça parte dessa comunidade! </p>
                <div className="btn-register">
                    <button>Registrar-se</button>
                </div>
            </section>
            <section className="publication">
                <div className="publication-content">
                    <h3>É muito simples falar mal</h3>
                    <p>Lorem Ipsum dolar</p>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </section>
            <section className="technologies">
                <div className="technologies-content">
                    <h3>Tecnologias mais odiadas</h3>
                    <p>Lorem Ipsum dolor</p>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </section>
            <section className="form-signup">
                {/* Formulario para cadastrar conta */}
                <Footer />
            </section>
           
        </div>
    )
}

export default LandingPage;