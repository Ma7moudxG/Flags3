import React from "react"


export default function Navbar() {
    return (
        <nav className="nav-bar" id="nav-bar">
            <h3 className="nav--title" id="nav--title">Where in the world?</h3>
            <button className="dark-mode-btn" id="dark-mode-btn"><i className="fa-regular fa-moon"></i> Dark Mode</button>
        </nav>
    )
}