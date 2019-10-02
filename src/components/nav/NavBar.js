import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Our Library<br />
          <small>Live your best life now in our books.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/books">Books</Link></li>
            <li><Link className="nav-link" to="/patrons">Patrons</Link></li>
            <li><Link className="nav-link" to="/checkout">Checkout</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;