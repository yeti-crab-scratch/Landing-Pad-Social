import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  return(
  <nav id="nav">
        <Link id="navText" to="/">
          Home
        </Link>{' '}
          |{' '}
        <Link id="navText" to="/createEvent">
          Create Event
        </Link>{' '}
        |{' '}
        <Link id="navText" to="/profile">
          My Profile
        </Link>
        <Link id="navSignup" to="/signup">
          Sign up!
        </Link>
      </nav>
  )
}

export default Navbar;