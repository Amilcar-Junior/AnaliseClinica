import React, { Component } from "react";
import ModalVideo from 'react-modal-video'

import about1Img from "../../../assets/images/about-1.png"
import about2Img from "../../../assets/images/about-2.png"
import {Link} from "react-router-dom";

class AboutWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

  render() {
      const {isOpen } = this.state;
    return (
       <>
           {/* ===============  About wrapper area start =============== */}
           <div className="about-wrapper mt-120">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-7 col-md-12">
                           <div className="about-wrapper-left">
                               <div className="about-img">
                                   <img src={about1Img} alt="" className="img-fluid" />
                               </div>
                               <div className="about-video" >
                                   <img src={about2Img} alt="" className="img-fluid"  />
                                   <i onClick={() => this.setState({ isOpen: true })} class="flaticon-play-button-arrowhead"></i>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-5 col-md-12">
                           <div className="about-wrapper-right section-head head-left">
                               <h5>About TourX</h5>
                               <h2>The Best Travel Agency
                                   Company.</h2>
                               <p>Uma solução integrada e completa para as necessidades da gestão da saúde de municípios, clínicas, hospitais, unidades básicas e outras unidades de saúde</p>
                               <ul className="about-list">
                                   <li><i className="flaticon-double-checking" /> Anatomia Patológica</li>
                                   <li><i className="flaticon-double-checking" /> Alergologia </li>
                                   <li><i className="flaticon-double-checking" /> Biologia Molecular </li>
                                   <li><i className="flaticon-double-checking" /> Endocrinologia </li>
                                   <li><i className="flaticon-double-checking" /> Hematologia </li>
                                   <li><i className="flaticon-double-checking" /> Imunologia </li>
                               </ul>
                               <div className="about-wrapper-btn">
                                   <Link to={"#"} className="btn-common">Ler Mais</Link>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           <React.Fragment>
               <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="-tJYN-eG1zk" onClose={() => this.setState({ isOpen: false })} />
           </React.Fragment>

           {/* ===============  About wrapper area end =============== */}
       </>
    );
  }
}

export default AboutWrapper;
