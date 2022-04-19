import React from 'react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

const Navbar = (props) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex justify-content-between">
          <Link to='/' onClick={props.changeStatus}  className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div className="navbar-nav d-flex flex-row align-items-center">
              <p className="nav-link mx-2 font-hel font-14 font-w400">Our service</p>
              <p className="nav-link mx-2 font-hel font-14 font-w400">Why us</p>
              <p className="nav-link mx-2 font-hel font-14 font-w400">Testimonial</p>
              <p className="nav-link mx-2 font-hel font-14 font-w400">FAQ</p>
              <p className="nav-link mx-2 font-hel font-14 font-w400">
                  <button className="btn btn-md btn-success">Register</button>
              </p>        
            </div>
           </div>
        </div>
    </nav>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
      people : state.people,
      tipe : state.tipe,
      year : state.year,
      status : state.status,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      changeStatus: () => dispatch({type:'CHANGE_STATUS',status:0})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)