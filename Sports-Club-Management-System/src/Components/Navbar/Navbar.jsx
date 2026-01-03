import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdLogout, MdOutlineDashboard } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./Navbar.css";
import logo from "../../assets/images.png";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { handleSignOut = () => {}, user = null } = useAuth() || {};

  const activeClass = "nav-link active";
  const inactiveClass = "nav-link";

  const menu = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/courts" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
          Courts
        </NavLink>
      </li>
      <li>
        <NavLink to="/faq" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/support" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
          Support
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {/* Left: Logo */}
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <div className="navbar-center">
          <ul className="nav-menu-list">{menu}</ul>
        </div>

        {/* Right: Actions */}
        <div className="navbar-right">
          <Tooltip id="user-tooltip" />
          
          {user ? (
            <div className="user-section">
              <span className="user-email">{user.email}</span>
              <div className="dropdown">
                <div tabIndex={0} role="button" className="avatar-btn">
                  <div className="avatar-ring">
                    <img 
                      src={user.photoURL || "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"} 
                      alt="User" 
                    />
                  </div>
                </div>
                {/* Dropdown Menu */}
                <ul tabIndex={0} className="dropdown-menu">
                  <li className="user-info">
                    <FaRegUserCircle size={22} className="icon-yellow" />
                    {user.displayName || "User"}
                  </li>
                  <li>
                    <Link to="/dashboard" className="dropdown-link">
                      <MdOutlineDashboard size={20} /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleSignOut} className="logout-btn-small">
                      <MdLogout size={20} /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/login" className="login-link">
              <button className="login-btn-main">
                <FaUserCircle size={24} />
                Login
              </button>
            </Link>
          )}

          {/* Mobile Hamburger (Visible only on small screens) */}
          <div className="mobile-toggle">
             <TiThMenu size={30} className="icon-yellow" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;