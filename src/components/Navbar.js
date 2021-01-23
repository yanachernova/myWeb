import React from 'react'


const Navbar = ({setChangeSideBar, changeSideBar}) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">

                    <button  onClick={() => setChangeSideBar(!changeSideBar)}  type="button" id="sidebarCollapse" className={`navbar-btn ${changeSideBar ? "active" : ""}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/#">Any Text</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar


