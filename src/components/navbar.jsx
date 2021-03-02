import React, { Component } from 'react';

class NavBar extends Component {
  state = {  }
  render() { 
    console.log('NavBar - Rendered')
    return ( 
      <nav className="navbar nav-light bg-light">
        <a href="#" className="navbar-brand">
          Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounter}</span>
        </a>
      </nav>
    );
  }
}
 
export default NavBar;