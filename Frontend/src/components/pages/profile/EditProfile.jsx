import React, { Component } from "react";


import { connect } from "react-redux";

import { updateProfile, retrieveProfile } from "../../../conection/profile/actions";

import { Redirect, Link } from "react-router-dom";


import ProfileService from "../../../conection/profile/profileService";

import { uploadFiles} from "../../../conection/images/ImageService";



class EditProfile extends Component {

  constructor(props) {

    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);

    this.onChangeEmail = this.onChangeEmail.bind(this);

    this.onChangePassword = this.onChangePassword.bind(this);

    this.onChangeDisplayName = this.onChangeDisplayName.bind(this);

    this.onChangeTelefone = this.onChangeTelefone.bind(this);

    this.onChangeImg = this.onChangeImg.bind(this);

    this.saveProfile = this.saveProfile.bind(this);


    this.state = {

      currentProfile: {

        username: "",

        email: "",

        password: "",

        name: "",

        telefone: "",

        foto:[],


      },
      image:[],


      redirect: false,

    };

  }

  componentDidMount() {

    this.getProfile(window.location.pathname.replace("/edit-profile/", ""));

  }

  onChangeUsername(e) {

    const username = e.target.value;

    this.setState(function (prevState) {

      return {

        currentProfile: {

          ...prevState.currentProfile,

          username: username,

        },

      };

    });

  }

  onChangeEmail(e) {

    const email = e.target.value;

    this.setState(function (prevState) {

      return {

        currentProfile: {

          ...prevState.currentProfile,

          email: email,

        },

      };

    });

  }

  onChangePassword(e) {

    const password = e.target.value;

    this.setState(function (prevState) {

      return {

        currentProfile: {

          ...prevState.currentProfile,

          password: password,

        },

      };

    });

  }

  onChangeDisplayName(e) {

    const name = e.target.value;

    this.setState(function (prevState) {

      return {

        currentProfile: {

          ...prevState.currentProfile,

          name: name,

        },

      };

    });

  }

  onChangeTelefone(e) {

    const telefone = e.target.value;

    this.setState(function (prevState) {

      return {

        currentProfile: {

          ...prevState.currentProfile,

          telefone: telefone,

        },

      };

    });

  }

  onChangeImg(e) {
    
    const foto = e.target.files;

    this.setState({image: foto});
  }





  getProfile(id) {

    ProfileService.get(id).then((response) => {

      this.setState({

        currentProfile: response.data,

      });

    });

  }
  async saveProfile() {
    const formData = new FormData();
    let foto;
    if(this.state.image.length){
      formData.append("files",this.state.image[0]);
      const {data} = await uploadFiles(formData)
      foto = data;
      this.setState({
        foto:foto,
      });
    }

    this.props

      .updateProfile(
        this.state.currentProfile.id,
        {...this.state.currentProfile,foto}
      )

      .then(() => {
        this.props.retrieveProfile();
        this.setState({
          redirect: true,
        });
      });
     
  }
  render() {

    const { redirect, currentProfile } = this.state;
    console.log(currentProfile.foto)
    if (redirect) {

      return <Redirect to="/list-user-profile" />;

    }

    return (
      <>
 
        <div className="container">
          <div className="row">
          <div className="col-1">
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">

                  <Link to={`${process.env.PUBLIC_URL}/list-user-profile`}>
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
                      <h5 style={{color : "#FF7F47"}}>Editar Minhas Infomações</h5>
                      <div className="row">
                     
                        <div className="col-lg-6">
                          <h6 htmlFor="name_grupo">Nome </h6>

                          <input

                            type="text"

                            className="form-control"

                            id="nome"

                            required

                            value={currentProfile.name}

                            onChange={this.onChangeDisplayName}

                            name="nome"

                          />
                        </div >


                        <div className="col-lg-6">
                          <h6 htmlFor="name_grupo">Username </h6>

                          <input

                            type="text"

                            className="form-control"

                            id="username"

                            required

                            value={currentProfile.username}

                            onChange={this.onChangeUsername}

                            name="username"

                          />

                        </div>


                        <div className="col-lg-6">
                          <h6 htmlFor="name_grupo">Email </h6>

                          <input

                            type="email"

                            className="form-control"

                            id="email"

                            required

                            value={currentProfile.email}

                            onChange={this.onChangeEmail}

                            name="email"

                          />

                        </div>

                        <div className="col-lg-6">
                          <h6 htmlFor="name_grupo">Telefone </h6>

                          <input

                            type="number"

                            className="form-control"

                            id="number"

                            required

                            value={currentProfile.telefone}

                            onChange={this.onChangeTelefone}

                            name="number"

                          />

                        </div>

                       




                        <div className="col-lg-6">
                          <h6 htmlFor="name_grupo">Password </h6>

                          <input

                            type="password"

                            className="form-control"

                            id="password"

                            required

                            value={currentProfile.password}

                            onChange={this.onChangePassword}

                            name="password"

                          />
                        </div >

                        <div className="col-lg-12">
                        <h6 htmlFor="foto">Escolha uma nova foto de perfil</h6>

                        <input
                          type="file"
                          className="custom-file-upload"
                          id="foto"
                          required
                          src={currentProfile.foto && currentProfile.foto.url}
                          accept=".png,.jpg"
                          
                          onChange={this.onChangeImg}
                          name="foto"
                        />
                      </div>
                        <div className="center">

                          <Link to={`/list-user-profile`} onClick={this.saveProfile} className="btn-second">

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
        <div className="end" />
      </>
    );

  }

}

export default connect(null, { updateProfile, retrieveProfile })(EditProfile);