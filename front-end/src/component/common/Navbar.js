import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>SBR Demo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/view-students"}>View All Students</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/add-student"}>Add New Student</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
