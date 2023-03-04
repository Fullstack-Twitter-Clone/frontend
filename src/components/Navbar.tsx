import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Home, Profile} from "./index";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          Navbar
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">"Toggle icon"</span>
        </button>
        
        
        {/* Navigation Links */}
        <section>
          <Link to='/home'>Home</Link>
          <Link to='/explore'>Explore</Link>
          <Link to='/profile'>Profile</Link> {/* this would be unique username */}

        </section>
      </nav>
    </div>
  );
};

export default Navbar;
