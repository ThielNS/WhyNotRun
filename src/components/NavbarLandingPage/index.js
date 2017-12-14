import React, { Component } from "react";
import Logo from "../Logo";
import "../Navbar/navbar.scss";
import NavMenu from "../Navmenu/index";

class NavbarLandingPage extends Component {
    render() {
        return (
            <nav className="nav-bar row -space-between -align-center">
                <div className="row">
                    <Logo />
                </div>

                <div className="row -align-center">
                    <NavMenu  />
                </div>
            </nav>
        )
    }
}
export default NavbarLandingPage;