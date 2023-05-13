import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

export default function Navbar(props) {
  return (
    <>

    <nav className="navbar navbar-expand-lg bg-body-tertiary navStyle">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 classes.list">
                <li className="nav-item">
                    <NavLink to='/' end className="navbar-link">Home</NavLink>
                </li>
                <div className="nav-item">
                <li >
                    <NavLink to='about'>About</NavLink>
                </li>
                </div>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                    </a>
                    <ul className="dropdown-menu">
                    <li><NavLink to='products'>Products</NavLink></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><NavLink to='addProduct'>Add a Product</NavLink></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Contact Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Sign Up</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Sign In</a>
                </li>
                </ul>
                {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <button className="nav-item">
                    <a className="nav-link disabled">Sign Up</a>
                </button>
                <button className="nav-item">
                    <a className="nav-link disabled">Sign In</a>
                </button>
            </div>
            </div>
        </nav>
        
    </>
  )
}
