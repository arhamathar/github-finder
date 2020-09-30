import React from 'react';
import {Link} from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';

function Navbar(){
  return (
    <nav className="navbar navbar-dark bg-danger ">
      <h1 className="navbar-brand">
      <GitHubIcon />
        Github Finder
      </h1>   
      <ul className="list-unstyled list-inline">
        <li className="list-inline-item text-uppercase ">
        <Link to="/about">About</Link>
        </li>
        <li className="list-inline-item text-uppercase ">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>     
      
    </nav>
  );
}

export default Navbar;