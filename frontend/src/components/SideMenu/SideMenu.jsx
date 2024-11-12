import React from "react";
import { Link } from "react-router-dom";
import styles from "./sideMenu.module.css";
import { FaHome, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { MdAccountCircle, MdTipsAndUpdates } from "react-icons/md";
import { IoPlanet } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { CgDarkMode } from "react-icons/cg";
// import { useState } from "react";
import { useLocation } from "react-router-dom";

const SideMenu = ({ isOpen }) => {
  let location = useLocation();
  function isActive(path) {
    if (location.pathname === path) return styles.ongletSelected;
  }
  return (
    <>
      <div className={styles.sideMenuContainer}>
        <button className={styles.darkMode}>
          Dark Mode
          <CgDarkMode />
        </button>
        <nav>
          <ul>
            <li className={isActive("/dashboard/home")}>
              <Link className={styles.linkItem} to="/dashboard/home">
                <FaHome />
                Home
              </Link>
            </li>
            <li className={isActive("/dashboard/coachs")}>
              <Link className={styles.linkItem} to="/dashboard/coachs">
                <GrUserExpert />
                Coachs
              </Link>
            </li>
            <li className={isActive("/dashboard/customers")}>
              <Link className={styles.linkItem} to="/dashboard/customers">
                <MdAccountCircle />
                Customers
              </Link>
            </li>
            <li className={isActive("/dashboard/statistics")}>
              <Link className={styles.linkItem} to="/dashboard/statistics">
                <ImStatsDots />
                Statistics
              </Link>
            </li>
            <li className={isActive("/dashboard/tips")}>
              <Link className={styles.linkItem} to="/dashboard/tips">
                <MdTipsAndUpdates />
                Tips
              </Link>
            </li>
            <li className={isActive("/dashboard/events")}>
              <Link className={styles.linkItem} to="/dashboard/events">
                <FaMapMarkerAlt />
                Events
              </Link>
            </li>
            <li className={isActive("/dashboard/astro")}>
              <Link className={styles.linkItem} to="/dashboard/astro">
                <IoPlanet />
                Astrology
              </Link>
            </li>
            <li className={isActive("/dashboard/home")}>
              <Link className={styles.linkItem} to="/dashboard/home">
                <FaHome />
                Dressroom
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.bottom}>
          <button>
            Settings
            <IoMdSettings />
          </button>
          <button>
            Deconnexion
            <TbLogout2 />
          </button>
        </div>
      </div>
    </>
  );
};

export default SideMenu;

// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./sideMenu.module.css";
// import { FaHome, FaMapMarkerAlt } from "react-icons/fa";
// import { GrUserExpert } from "react-icons/gr";
// import { MdAccountCircle, MdTipsAndUpdates } from "react-icons/md";
// import { IoPlanet } from "react-icons/io5";
// import { ImStatsDots } from "react-icons/im";
// import { IoMdSettings } from "react-icons/io";
// import { TbLogout2 } from "react-icons/tb";
// import { CgDarkMode } from "react-icons/cg";
// import { useState } from "react";
// import { useLocation } from "react-router-dom";

// const SideMenu = () => {
//   const [darkMode, switchDarkMode] = useState(true);
//   let location = useLocation();

//   function isActive(path) {
//     if (location.pathname === path) return styles.ongletSelected;
//   }
//   return (
//     <nav className="sidebar">
//       <div className={styles.gridSidemenu}>
//         <Link
//           onClick={() => switchDarkMode(!darkMode)}
//           className={`${styles.ongletMenu} ${styles.darkMode}`}
//         >
//           {darkMode ? "Light Mode" : "Dark Mode"}
//           <CgDarkMode className={styles.darkModeIcon}></CgDarkMode>
//         </Link>
//         <Link
//           to="/dashboard/home"
//           className={`${styles.ongletMenu} ${isActive("/dashboard/home")}`}
//         >
//           <FaHome className={styles.icons} />
//           Home
//         </Link>
//         <Link
//           to="/dashboard/coachs"
//           className={`${styles.ongletMenu} ${isActive("/dashboard/coachs")}`}
//         >
//           <GrUserExpert className={styles.icons}></GrUserExpert>
//           Coachs
//         </Link>
//         <Link
//           to="/dashboard/customers"
//           className={`${styles.ongletMenu} ${isActive("/dashboard/customers")}`}
//         >
//           <MdAccountCircle className={styles.icons}></MdAccountCircle>
//           Customers
//         </Link>
//         <Link
//           to="/dashboard/astro"
//           className={`${styles.ongletMenu} ${isActive("/dashboard/astro")}`}
//         >
//           <IoPlanet className={styles.icons}></IoPlanet>
//           Astro-tool
//         </Link>
//         <Link
//           to="/dashboard/statistics"
//           className={`${styles.ongletMenu} ${isActive(
//             "/dashboard/statistics"
//           )}`}
//         >
//           <ImStatsDots className={styles.icons}></ImStatsDots>
//           Statistics
//         </Link>
//         <Link
//           to="/dashboard/events"
//           className={`${styles.ongletMenu} ${isActive("/dashboard/events")}`}
//         >
//           <FaMapMarkerAlt className={styles.icons}></FaMapMarkerAlt>
//           Events
//         </Link>
//         <Link
//           to="/dashboard/tips"
//           className={`${styles.ongletMenu} ${isActive("/dashboard/tips")}`}
//         >
//           <MdTipsAndUpdates className={styles.icons}></MdTipsAndUpdates>
//           Tips
//         </Link>
//         <Link className={`${styles.ongletMenu} ${styles.parameter}`}>
//           <IoMdSettings className={`${styles.icons}`}></IoMdSettings>
//           Parametre
//         </Link>
//         <Link className={`${styles.ongletMenu} ${styles.deconnexion}`}>
//           <TbLogout2 className={styles.icons}></TbLogout2>
//           Deconnexion
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default SideMenu;
