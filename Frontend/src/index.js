import React                             from "react";
import ReactDOM                          from "react-dom";
import { BrowserRouter, Route, Switch }  from "react-router-dom";

import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import store from "./store";

//Image LightBox
import SimpleReactLightbox               from 'simple-react-lightbox'

//Layout default import from components.
import defaultLayout                    from "./components/layouts/main";
import secondLayout                     from "./components/layouts/main-two";

//Import wrapping layout
import Layout                           from "./components/app";

//Import all page from components
import aboutUs                          from "./components/pages/about-us/AboutUs";
import destinations                     from "./components/pages/destinations/Destinations";
import packages                         from "./components/pages/package/Packages";
import contact                          from "./components/pages/contact/Contact";
import faq                              from "./components/pages/faq/Faq";
import error                            from "./components/pages/404/404";
import guide                            from "./components/pages/guide/GuideComponent";
import gallary                          from "./components/pages/gallary/GalleryComponent";
import packageSidebar                   from "./components/pages/package/PackageSidebar";
import packageStandard                  from "./components/pages/package/PackageStanderd";
import packageDetails                   from "./components/pages/package/PackageDetails";
import blog                             from "./components/pages/blog/BlogComponent";
import blogSidebar                      from "./components/pages/blog/BlogSidebar";
import blogStandard                     from "./components/pages/blog/BlogStandard";
import blogDetails                      from "./components/pages/blog/BlogDetails";


import AuthPage from './containers/AuthPage';



//Initializations All Css
import './index.css';
import './index.scss';


import PublicRoute from './containers/PublicRouter'
import PrivateRoute from './containers/PrivateRoute'
import HomePage from "./components/pages/home/HomePage";
import NotFound from "./containers/NotFound";
import ConnectPage from './containers/ConnectPage';

/*
* Version : 0.1
* Event : Rendering all content to web.
* Actions: Define all routes and page.
* @return html
* */

class Root extends React.Component{
    render(){
        return(
            <BrowserRouter basename={"/"}>
                    <Switch>
                    <PublicRoute exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
                        
                            <PublicRoute path={"/about-us"} component={aboutUs} />
                            <PublicRoute path={"/destination"} component={destinations} />
                            <PublicRoute path={"/package"} component={packages} />
                            <PublicRoute path={"/package-sidebar"} component={packageSidebar} />
                            <PublicRoute path={"/package-standard"} component={packageStandard} />
                            <PublicRoute path={"/package-details"} component={packageDetails} />
                            <PublicRoute path={"/faq"} component={faq} />
                            <PublicRoute path={"/404"} component={error} />
                            <PublicRoute path={"/guide"} component={guide} />
                            <PublicRoute path={"/gallary"} component={gallary} />
                            <PublicRoute path={"/blog"} component={blog} />
                            <PublicRoute path={"/blog-sidebar"} component={blogSidebar} />
                            <PublicRoute path={"/blog-standard"} component={blogStandard} />
                            <PublicRoute path={"/blog-details"} component={blogDetails} />
                            <PublicRoute path={"/contact"} component={contact} />
                            <PublicRoute path="/auth/:authType/:id?" component={AuthPage} />
                            <PublicRoute path="/connect/:provider" component={ConnectPage} />



                            <NotFound exact path="*" component={Error} />
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

