import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/dashboard/home");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <button className={styles.button} onClick={goToHome}>Go Home</button>
    </div>
  );
};

export default NotFoundPage;