import React from "react";
import photo from "../assets/AquPhoto.jpeg"
import styles from "./Header.module.css";


/*const Header = () => {
  return (
    <div className="border-8"  style={{ position: "absolute", top: "0px", left: "390px", height: "150px", width: "1530px"}}>
      <h1
        style={{
          position: "absolute",
          top: "10px",
          left: "30px",
          fontSize: "60px",
        }}
      >
        Soul Connection
      </h1>
      <div className="w-32 h-32 rounded-full overflow-hidden border-8"
      style={{
        position: "absolute",
        top: "0px",
        left: "1100px",
        fontSize: "60px",
      }}
      >
        <img
          src={photo}
          alt="Description"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;*/

const Header = ({toggleMenu}) => {

  return (
    <header className={styles.headbar}>
      <button className={styles.hamburger} onClick={toggleMenu}>☰</button>
      <h1>Soul Connection Dashboard</h1>
      <div className={styles.userConnected}>
        <img src="" alt="" />
        <span>Aquilas Le Hunt</span>
        <span>example@gmail.com</span>
      </div>
    </header>
  );
};


export default Header;