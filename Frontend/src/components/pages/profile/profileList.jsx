import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { retrieveProfile } from "../../../conection/profile/actions";


import './App.css';


class ProfileList extends Component {


  constructor(props) {
    super(props)
    this.state = {
      users: {},
      role: {},
      gruposand: {},
      foto: []
    }

  }

  getUserInfo() {
    const userInfo = sessionStorage.getItem("userInfo")
    const user = JSON.parse(userInfo)
    this.setState({
      user
    })
    this.setState({
      role: user.role
    })
    this.setState({
      foto: user.foto
    })
    this.setState({
      users: user
    })
    console.log(user)
  }

  componentDidMount() {

    this.props.retrieveProfile();
    this.getUserInfo()

  };

 
  render() {


    const { users } = this.props;
    const { role, foto} = this.state;

    console.log(users)
    console.log(users.foto)
    console.log(foto)
    return (

      <>
        <users className="user">



          <div className="container">
            <div className="row">


              <div className="row">
                <div className="col-1">
                  <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">

                      <Link to={`${process.env.PUBLIC_URL}/home-page-adm`}>
                        <i class="fas fa-arrow-left" /> Voltar
                      </Link>

                    </span>

                  </div>
                </div>
                <div className="end" />

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <form>
                    <div className="submit-form">
                      <div>
                        <div className="ask-inputs">
                          <h5 className="center" style={{ color: "#FF7F47" }}>Minhas Infomações</h5>
                          <div className="row">
                   
                            <div className="col-lg-1"/>
                            <div className="col-lg-3">
                              <div className="img-holder">
                                      {users.foto && <img src={process.env.REACT_APP_SERVER_URL + users.foto.url} id="img" className="img" alt="avatar" />}
                              </div>
                              <div className="end"/>
                            </div>
                            
                            <div className="col-lg-7">


                              <div className="col-lg-7">
                                <h6 htmlFor="name_grupo">Nome:&nbsp;&nbsp;&nbsp; <label>{users.name}</label></h6>

                              </div>
                              <br/>
                              <div className="col-lg-6">
                                <h6 htmlFor="name_grupo">Username:&nbsp;&nbsp;&nbsp; <label>{users.username}</label></h6>


                              </div>
                              <br/>
                              <div className="col-lg-6">
                                <h6 htmlFor="name_grupo">Email:&nbsp;&nbsp;&nbsp; <label>{users.email}</label></h6>

                              </div>
                              <br/>
                              
                              
                              <div className="col-lg-6">
                                <h6 htmlFor="name_grupo">Telefone:&nbsp;&nbsp;&nbsp; <label>{users.telefone}</label></h6>

                              </div>
                              <br/>
                              <div className="col-lg-6">
                                <h6 htmlFor="name_grupo">endereco:&nbsp;&nbsp;&nbsp; <label>{users.endereco}</label></h6>

                              </div>
                              <br/>
                              <div className="col-lg-6">
                                <h6 htmlFor="name_grupo">Cargo:&nbsp;&nbsp;&nbsp; <label>{role &&  role.name}</label></h6>

                              </div>
                              <br/>
                              <div className="col-lg-6">
                                <h6 htmlFor="name_grupo">Especialidade:&nbsp;&nbsp;&nbsp; <label>{users.especialidade}</label></h6>

                              </div>
                              <br/>
                              
                           


                            </div>
                            <div className="center">
                              <Link to={`/edit-user-profile/${users.id}`} className="btn-second">

                                Editar

                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </users>
      </>
    );


  }

}

const mapStateToProps = (state) => {
  console.log(state)
  console.log(state.users)
  return {

    users: state.users,

  };

};

export default connect(mapStateToProps, { retrieveProfile })(ProfileList);