import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Home, Profile} from "./index";
import { FaHome, FaSlackHash, FaUserAlt} from "react-icons/fa"

const Navbar = () => {
  return (
    <div  className='p-20 flex flex-col'>
      <nav className="flex-column">    
        
        {/* Navigation Links */}
        <section className='text-6xl text-white'>
          <FaHome />
          <FaSlackHash />
          <FaUserAlt />
          <Link to='/home'>Home</Link>
          <Link to='/explore'>Explore</Link>
          <Link to='/profile'>Profile</Link> {/* this would be unique username */}

        </section>
      </nav>
    </div>
  );
};

export default Navbar;
