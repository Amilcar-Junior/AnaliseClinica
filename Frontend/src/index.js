import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./store";

//Image LightBox
import SimpleReactLightbox from "simple-react-lightbox";

//Import all page from components
import aboutUs from "./components/pages/about-us/AboutUs";
import contact from "./components/pages/contact/Contact";
import error from "./components/pages/404/404";

import AuthPage from "./containers/AuthPage";

//Initializations All Css
import "./index.css";
import "./index.scss";

import PublicRoute from "./containers/PublicRouter";
import PrivateRoute from "./containers/PrivateRoute";
import HomePage from "./components/pages/home/HomePage";
import HomePage2 from "./components/pages/home/HomePage";
import NotFound from "./containers/NotFound";
import ConnectPage from "./containers/ConnectPage";

import ListTeste from "./components/pages/teste/ListTeste";
import AddTeste from "./components/pages/teste/AddTeste";
import EditTeste from "./components/pages/teste/EditTeste";
import UtilizadoresList from "./components/pages/utilizadores/UtilizadoresList";
import AddUtilizador from "./components/pages/utilizadores/AddUtilizador";
import EditUtilizador from "./components/pages/utilizadores/EditUtilizador";
import ProfileList from "./components/pages/profile/profileList";
import EditProfile from "./components/pages/profile/EditProfile";
import ListPaciente from "./components/pages/paciente/ListPaciente";
import AddPaciente from "./components/pages/paciente/AddPaciente";
import EditPaciente from "./components/pages/paciente/EditPaciente";
import ListRecolha from "./components/pages/recolha/ListRecolha";
import AddRecolha from "./components/pages/recolha/AddRecolha";
import EditRecolha from "./components/pages/recolha/EditRecolha";
import VerRecolha from "./components/pages/recolha/VerRecolha";
import ListResultado from "./components/pages/resultado/ListResultado";
import VerResultado from "./components/pages/resultado/VerResultado";
import AddResultado from "./components/pages/resultado/AddResultado";
import Dashboard from "./components/pages/dashboard";
import ListLog from "./components/pages/logs/ListLog";
/*
 * Version : 0.1
 * Event : Rendering all content to web.
 * Actions: Define all routes and page.
 * @return html
 * */

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <PublicRoute
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={HomePage}
          />

          <PublicRoute path="/about-us" component={aboutUs} />
          <PublicRoute path="/contact" component={contact} />
          <PublicRoute path="/auth/:authType/:id?" component={AuthPage} />
          <PublicRoute path="/connect/:provider" component={ConnectPage} />

          <PrivateRoute path="/list-utilizadores" component={UtilizadoresList}/>
          <PrivateRoute path="/add-utilizadores" component={AddUtilizador} />
          <PrivateRoute path="/edit-utilizador" component={EditUtilizador} />

          <PrivateRoute path="/list-paciente" component={ListPaciente} />
          <PrivateRoute path="/add-paciente" component={AddPaciente} />
          <PrivateRoute path="/edit-paciente" component={EditPaciente} />
          
          <PrivateRoute path="/list-recolha" component={ListRecolha} />
           <PrivateRoute path="/add-recolha" component={AddRecolha} />
          <PrivateRoute path="/edit-recolha" component={EditRecolha} />
          <PrivateRoute path="/ver-recolha" component={VerRecolha} />

          <PrivateRoute path="/list-resultado" component={ListResultado} />
          <PrivateRoute path="/add-resultado" component={AddResultado} />
           <PrivateRoute path="/add-resultado" component={AddResultado} />
          <PrivateRoute path="/ver-resultado" component={VerResultado} /> 

          <PrivateRoute path="/list-teste" component={ListTeste} />
          <PrivateRoute path="/add-teste" component={AddTeste} />
          <PrivateRoute path="/edit-teste" component={EditTeste} />

          <PrivateRoute path="/list-user-profile" component={ProfileList} />
          <PrivateRoute path="/edit-user-profile" component={EditProfile} />

          <PrivateRoute path="/list-log" component={ListLog} />


          <PrivateRoute path="/dashboard" component={Dashboard} />
          

          <NotFound exact path="*" component={error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <Provider store={store}>
        <Root />
        <ToastContainer />
      </Provider>
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
