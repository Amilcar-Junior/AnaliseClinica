import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

//Import Image
import logoMain from "../../assets/images/logo.png";
import secondLogo from "../../assets/images/logo-2.png";
import auth from "../../utils/auth";
import { connect } from "react-redux";
import { createLog } from "../../conection/logs/actions";
import { retrieveProfile } from "../../conection/profile/actions";

class Headers extends Component {
  constructor(props) {
    super(props);
    this.saveLog = this.saveLog.bind(this);

    this.state = {
      user: null,
    };
  }

  async saveLog() {
    const data = new Date();
    //+1 dia porque o strapi remove 1 dia bug da verção do strapi
    data.setDate(data.getDate() + 1);
    const tipo = "Log Out";
    const user = this.state.user.id;
    console.log(this.state);

    this.props
      .createLog(data, tipo, user)
      .catch((err) => console.log(err.response));
      auth.clearAppStorage();
  }

  componentDidMount() {
    this.props.retrieveProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
      console.log(this.props.user);
    }
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        {/* =============== Topbar area start =============== */}
        <div className="topbar-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5 tob-contact-row">
                <div className="topbar-contact">
                  <ul>
                    <li>
                      <i className="bx bxs-phone" />
                      <a href="tel:+17632275032">+1 763-227-5032</a>
                    </li>

                    <li>
                      <i className="bx bxs-envelope" />
                      <a href="mailto:info@example.com">health@health.cv</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6">
                <div className="topbar-social">
                  <ul>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-whatsapp" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =============== Topbar area end =============== */}

        {/* ===============  header area start =============== */}
        <header>
          <div className="header-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                  <div className="navbar-wrap">
                    <div className="logo d-flex justify-content-between">
                      <Link
                        to={`${process.env.PUBLIC_URL}/`}
                        className="navbar-brand"
                        onClick={this.scrollTop}
                      >
                        <img src={logoMain} width="100px" alt="" />
                      </Link>
                    </div>
                    <div className="navbar-icons">
                      <div className="searchbar-open">
                        <i className="flaticon-magnifier" />
                      </div>
                      <div className="searchbar-open">
                        <a
                          href={`${process.env.PUBLIC_URL}/help/`}
                          target="_blank"
                        >
                          {" "}
                          <i class="fas fa-question-circle" />
                        </a>
                      </div>
                      <div className="user-dropdown-icon">
                        <i className="flaticon-user" />
                        <div className="account-dropdown">
                          <ul>
                            <li className="account-el">
                              <i className="bx bxs-user-account" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/list-user-profile`}
                              >
                                Perfil
                              </Link>
                            </li>

                            <li className="account-el">
                              <Link
                                to={"/"}
                                onClick={this.saveLog}
                              >
                                {" "}
                                <i className="bx bx-log-in-circle" />
                                Log out
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mobile-menu d-flex ">
                        <div className="top-search-bar m-0 d-block d-xl-none"></div>
                        <Link to={"#"} className="hamburger d-block d-xl-none">
                          <span className="h-top" />
                          <span className="h-middle" />
                          <span className="h-bottom" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                  <nav className="main-nav">
                    <div className="navber-logo-sm">
                      <img src={secondLogo} alt="" className="img-fluid" />
                    </div>
                    <ul>
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/`}
                          onClick={this.scrollTop}
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li className="has-child-menu">
                        <Link to={"#"}>Health</Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/list-utilizadores`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Utilizadores
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/list-paciente`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Pacientes
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="has-child-menu">
                        <Link to={"#"}>Análise</Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/list-recolha`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Recolha
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/list-resultado`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Resultado
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/list-teste`}
                          onClick={this.scrollTop}
                        >
                          Teste
                        </NavLink>
                      </li>
                    </ul>
                    <div className="navbar-icons-2">
                      <div className="searchbar-open">
                        <i className="flaticon-magnifier" />
                      </div>
                      <div className="searchbar-open">
                        <a
                          href={`${process.env.PUBLIC_URL}/help/`}
                          target="_blank"
                        >
                          {" "}
                          <i class="fas fa-question-circle" />
                        </a>
                      </div>
                      <div className="user-dropdown-icon">
                        <i className="flaticon-user" />
                        <div className="account-dropdown">
                          <ul>
                            <li className="account-el">
                              <i className="bx bxs-user-account" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/list-user-profile`}
                              >
                                Perfil
                              </Link>
                            </li>

                            <li className="account-el">
                              <Link
                                to={"/"}
                                onClick={this.saveLog}
                              >
                                {" "}
                                <i className="bx bx-log-in-circle" />
                                Log out
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar-contact">
                      <ul>
                        <li className="sidebar-single-contact">
                          <i className="bx bxs-phone" />
                          <Link to={`tel:+17632275032`}>+1 763-227-5032</Link>
                        </li>
                        <li className="sidebar-single-contact">
                          <i className="bx bxs-envelope" />
                          <Link to={`mailto:info@example.com`}>
                            info@example.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            <form>
              <div className="main-searchbar">
                <div className="searchbar-close">
                  <i className="bx bx-x" />
                </div>
                <input type="text" placeholder="Search Here......" />
                <div className="searchbar-icon">
                  <i className="bx bx-search" />
                </div>
              </div>
            </form>
          </div>
        </header>
        {/* ===============  header area end =============== */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.users,
});

export default connect(mapStateToProps, {
  createLog,
  retrieveProfile,
})(Headers);
