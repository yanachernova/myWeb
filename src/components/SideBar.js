import React from 'react'
import { NavLink } from "react-router-dom"
import Logo from '../statics/Images/Logo_white.png'
import { data } from '../data/es'

const SideBar = ({changeSideBar}) => {
    return (
        
        <nav id="sidebar" className={`${changeSideBar ? "active" : ""}`}>
        <div className="sidebar-header">
        <img className="navbar__logo ml-4" src={Logo} alt="Logo"/>

        </div>
        <hr />
        <ul className="list-unstyled components">
            <p className="text-center pt-3">Any Text</p>
            <li>
            <NavLink activeClassName="active" to="html" className="navbar__link">{data.navbarLinkHtml}</NavLink>
            </li>
            <li>
            <NavLink  activeClassName="active" to="css" className="navbar__link">{data.navbarLinkCss}</NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" to="js" className="navbar__link">{data.navbarLinkJs}</NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" className="navbar__link" to="github">{data.navbarLinkGithub}</NavLink>
            </li>
        </ul>
    </nav>
        
    )
}

export default SideBar
