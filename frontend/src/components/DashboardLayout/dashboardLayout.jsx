/*import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';
import Header from '../Header';
import styles from './DashboardLayout.module.css';

const DashboardLayout = () => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.dashboardGrid}>
      <SideMenu/>
      <Header />
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;*/
                                                                                             
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import styles from './DashboardLayout.module.css';

const DashboardLayout = () => {
  return (
    <div className={styles.dashboardGrid}>                                                                                          
      <NavbarMenu />                                                                                                                
      <main className={styles.mainContainer}>                                                                                       
        <Outlet />                                                                                                                  
      </main>                                                                                                                       
    </div>
  );
};

export default DashboardLayout;

