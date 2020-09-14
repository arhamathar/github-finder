import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

function Navbar(){
  return (
    <nav className="navbar navbar-dark bg-danger ">
      <h1 className="navbar-brand">
      <GitHubIcon />
        Github Finder
      </h1>        
    </nav>
  );
}

export default Navbar;