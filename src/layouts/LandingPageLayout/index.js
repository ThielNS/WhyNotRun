import React, {Component} from "react";
import NavbarLandingPage from "../../components/NavbarLandingPage";
import {Route} from "react-router-dom";

class LandingPageLayout extends Component {

    componentDidUpdate() {
        window.scrollTo(0,0);
    }

    render(){
        
        const { Component, ...restProps} = this.props;              
        
        return (
            <div> 
                <NavbarLandingPage />
                <Route {...restProps} render={Component}/>
            </div>
        )
    }
}
export default LandingPageLayout;