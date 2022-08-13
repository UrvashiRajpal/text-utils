import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
  
    <nav className={`navbar navbar-expand-lg navbar-${props.modeVar} bg-${props.modeVar}`}>
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <Link className="nav-link" to="/">Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
       
      </ul>

      <div className="d-flex">
      <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleVar('primary')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleVar('danger')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggleVar('success')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleVar('warning')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
      </div>
    
    <div className={`custom-control custom-switch text-${props.modeVar==='light'?"dark":"light"}`}>
      <input type="checkbox" onClick={()=>{props.toggleVar(null)}} className="custom-control-input" id="customSwitch1" />
      <label className="custom-control-label" htmlFor="customSwitch1">Enable Dark Mode</label>
    </div>
      {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
  </nav>
  )
}

Navbar.propTypes = {           
            title: PropTypes.string.isRequired,          //it is  must
            about: PropTypes.string
}

Navbar.defaultProps = {                     //defaultprops         
    title: 'set title here',
    about: 'about usssss'
}