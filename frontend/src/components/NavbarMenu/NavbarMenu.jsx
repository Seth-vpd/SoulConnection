import React from "react";
import styles from "./NavbarMenu.module.css";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import { useLocation } from "react-router-dom";
import ProfilImage from "../../assets/flag.jpg";

const NavbarMenu = () => {
  let location = useLocation();
  function isActive(path) {
    if (location.pathname === path) 
      return styles.activeLink;
    else
      return styles.navLink;
  }
  return (
    <div className={styles.NavBar}>
      <h1><Link to="/dashboard/home">Soul Connection</Link></h1>
      <nav>
        <ul>
          <li >
            <Link className={isActive("/dashboard/home")} to="/dashboard/home">Dashboard</Link>
          </li>
          <li>
            <Link className={isActive("/dashboard/coachs")} to="/dashboard/coachs">Coaches</Link>
          </li>
          <li>
            <Link className={isActive("/dashboard/customers")} to="/dashboard/customers">Customers</Link>
          </li>
          <li>
            <Link className={isActive("/dashboard/tips")} to="/dashboard/tips">Tips</Link>
          </li>
          <li>
            <Link className={isActive("/dashboard/events")} to="/dashboard/events">Events</Link>
          </li>
          <li>
            <Link className={isActive("/dashboard/astro")} to="/dashboard/astro">Astrology</Link>
          </li>
          <li>
            <Link className={isActive("/dashboard/statistics")} to="/dashboard/statistics">Statistics</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.profilInfo}>
        <img src={ProfilImage} alt="connected user" title="Aquilas Le Hunt"/>
        <Logout/>
      </div>
    </div>
  );
};

export default NavbarMenu;
