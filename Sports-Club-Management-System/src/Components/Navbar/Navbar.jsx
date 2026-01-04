
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdLogout, MdOutlineDashboard, MdClose } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./Navbar.css";
import logo from "../../assets/images.png";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { handleSignOut = () => {}, user = null } = useAuth() || {};
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeClass = "nav-link active";
  const inactiveClass = "nav-link";

  // ✅ MENU AS FUNCTION (IMPORTANT FIX)
  const menu = (closeMenu) => (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/courts" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
          Courts
        </NavLink>
      </li>
      <li>
        <NavLink to="/faq" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/support" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
          Support
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar-container">
      <div className="navbar-content">

        {/* LEFT LOGO (DESKTOP ONLY) */}
        <div className="navbar-left desktop-only">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* CENTER MENU (DESKTOP ONLY) */}
        <div className="navbar-center desktop-only">
          <ul className="nav-menu-list">
            {menu()}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-right">
          <Tooltip id="user-tooltip" />

          {/* LOGIN (DESKTOP ONLY) */}
          {!user && (
            <Link to="/login" className="login-link desktop-only">
              <button className="login-btn-main">
                <FaUserCircle size={22} />
                Login
              </button>
            </Link>
          )}

          {/* HAMBURGER (MOBILE ONLY) */}
          <div
            className="mobile-toggle mobile-only"
            onClick={() => setMobileOpen(true)}
          >
            <TiThMenu size={30} className="icon-yellow" />
          </div>
        </div>
      </div>

      {/* 🔥 MOBILE FULL MENU */}
      {mobileOpen && (
        <div className="mobile-menu">
          <button className="close-btn" onClick={() => setMobileOpen(false)}>
            <MdClose size={28} />
          </button>

          <ul className="mobile-menu-list">
            {menu(() => setMobileOpen(false))}

            {/* LOGIN (MOBILE MENU ONLY) */}
            {!user && (
              <li>
                <Link
                  to="/login"
                  className="mobile-login-btn"
                  onClick={() => setMobileOpen(false)}
                >
                  <FaUserCircle /> Login
                </Link>
              </li>
            )}

            {user && (
              <>
                <li>
                  <Link to="/dashboard" onClick={() => setMobileOpen(false)}>
                    <MdOutlineDashboard /> Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={handleSignOut}>
                    <MdLogout /> Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
