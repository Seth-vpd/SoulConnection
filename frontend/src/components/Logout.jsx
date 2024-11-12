import React from "react"
import styles from "./Logout.module.css"
import { TbLogout2 } from "react-icons/tb";


const Logout = () => {
    return (
        <button className={styles.logoutButton}>
            <TbLogout2/>
        </button>
    );
};

export default Logout;