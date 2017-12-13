import React, { Component } from "react";
import Logo from "../Logo";
import NavMenu from "../Navmenu/index";

class NavbarLandingPage extends Component {
    render() {
        return (
            <nav className="nav-bar row -space-between -align-left">
                <div className="row -flex-start">
                    <Logo />
                </div>
                <div className="col-sm-4 row -space-between -flex-end -align-center">
                    <NavMenu  />
                </div>
            </nav>
        )
    }
}
export default NavbarLandingPage;