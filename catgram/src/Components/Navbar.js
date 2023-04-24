import React from "react";
import "../Assests/Css/Navbar.css";
export default function Navbar(){
    return(
        <div >
            <nav className="navbar" >
                <ul>
                    <li>
                        <a href="/">Dashboard</a>
                    </li>
                    <li>
                        <a href="/post">Post</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}