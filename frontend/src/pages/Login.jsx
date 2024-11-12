import React from 'react';
import LoginForm from "../components/Login/LoginForm";
import styles from "./LoginPage.module.css";
//import { BsDisplay } from 'react-icons/bs'

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <LoginForm></LoginForm>
    </div>
  )
}

export default Login;
