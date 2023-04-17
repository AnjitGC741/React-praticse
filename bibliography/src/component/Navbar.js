import React from "react";
import '../assets/css/Navbar.css'
class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <h1 className="logo">ANZIT</h1>
                <div className="navbar-links-section">
                    <ul className="navbar-links">
                        <li>HOME</li>
                        <li>PORTFOLIO</li>
                        <li>SKILL</li>
                        <li>EDUCATION</li>
                        <li>CONTACT</li>
                        <li>BLOG</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navbar;