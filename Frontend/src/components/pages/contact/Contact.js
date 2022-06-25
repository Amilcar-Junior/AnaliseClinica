import React, { Component } from "react";
import {Link} from "react-router-dom";
class AboutUs extends Component {
    componentDidMount(){
        this.scrollTop();
    }

    scrollTop()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
  render() {
    return (
        <>
            {/* ===============  breadcrumb area start =============== */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                                <h2>Contate Nós</h2>
                                <ul className="breadcrumb-links">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                                        <i className="bx bx-chevron-right" />
                                    </li>
                                    <li>Contate Nós</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  breadcrumb area end =============== */}
            <div className="contact-wrapper pt-90">
                <div className="contact-cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-card">
                                    <div className="contact-icon"><i className="flaticon-arrival" />
                                    </div>
                                    <div className="contact-info">
                                        <h5>Endereço</h5>
                                        <p>Praia, Cidadela Health 360</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-card">
                                    <div className="contact-icon"><i className="flaticon-customer-service" />
                                    </div>
                                    <div className="contact-info">
                                        <h5>Email &amp; Telefone</h5>
                                        <p>(123) 456 7890
                                            hello@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-card">
                                    <div className="contact-icon"><i className="flaticon-thumbs-up" />
                                    </div>
                                    <div className="contact-info">
                                        <h5>Social Media</h5>
                                        <ul className="contact-icons">
                                            <li>
                                                <Link to={"#"}><i className="bx bxl-instagram" /></Link>
                                                </li>
                                            <li>
                                                <Link to={"#"}><i className="bx bxl-facebook" /></Link>
                                                </li>
                                            <li>
                                                <Link to={"#"}><i className="bx bxl-twitter" /></Link>
                                                </li>
                                            <li>
                                                <Link to={"#"}><i className="bx bxl-whatsapp" /></Link>
                                                </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="contact-inputs pt-100">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-details">
                                    <h5 className="contact-d-head">Health 360</h5>
                                    <p>Uma solução integrada e completa para as necessidades da gestão da saúde de municípios, clínicas, hospitais, unidades básicas e outras unidades de saúde </p>
                                    <ul className="office-clock">
                                        <li>
                                            <div className="clock-icon"><i className="flaticon-clock-1" /></div>
                                            <div className="clock-info">
                                                <h5>Horario aberto</h5>
                                                <p>Seg - Sex <br /> 10.00Am to 10.00PM</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="clock-icon"><i className="flaticon-clock-1" /></div>
                                            <div className="clock-info">
                                                <h5>Horario Fechado</h5>
                                                <p>Fim é Semana Fechado</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-form">
                                    <form action="#" >
                                        <h5 className="contact-d-head">Contact Us</h5>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Nome Completo" required />
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Sujeito" required/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="email" placeholder="Seu Email" required/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Contacto" required/>
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea cols={30} rows={7} placeholder="Escreva a Messagem" defaultValue={""} />
                                            </div>
                                            <div className="col-lg-12">
                                                <input type="submit" defaultValue="Submit Now" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="end"/>
        </>
    );
  }
}

export default AboutUs;
