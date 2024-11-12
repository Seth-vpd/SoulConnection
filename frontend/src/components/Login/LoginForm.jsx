import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/authProvider";
import styles from "./LoginForm.module.css";


  //   try {
  //     console.log("Try shitt");
  //     const response = await fetch("http://localhost:3000/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //       credentials: "include", // Inclus les cookies HttpOnly dans les requêtes
  //     });
  //     console.log("Response shitt" + response);
  //     if (response.ok) {
  //       console.log(`Login successful ${response.ok}`);
  //       alert("Login successful");
  //       window.location.pathname = "/";
  //     } else {
  //       console.log(`Login unsuccessful ${response.ok}`);
  //       setError("Invalid login credentials");
  //     }
  //   } catch (error) {
  //     setError("An error occurred during login");
  //   }

function LoginForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
    showPassword: true
  });

  const { login } = useAuth(); // Récupère la fonction login depuis AuthProvider
  const navigate = useNavigate();
  
  const checkInputBox = () => {
    if (data.email === "" || data.password === "")
      return false;
    else
      return true;
  };

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!checkInputBox()) {
      alert("Please fill in both the email and password fields.");
      return;
    }

    // Appelle la fonction login du AuthProvider
    const success = await login(data.email, data.password);
    console.log(`returned value is: ${success}`);
    if (success) {
      navigate("/dashboard/home"); // Redirection après succès
    } else {
      alert("Authentication failed. Please check your credentials.");
    }
  };

  return (
    <>
      <form className={styles.formBox}onSubmit={HandleSubmit}>
        <h1 className={styles.title}>LogIn to Soul Connection</h1>
        <div className={styles.inputArea}>
          <input className={styles.inputField} name="email" type="email" placeholder="Email" onChange={handleInput}/>
        </div>
        <div className={styles.inputArea}>
          <input className={styles.inputField} name="password" type={data.showPassword ? "text" : "password"} placeholder="Password" onChange={handleInput}/>
          <label className={styles.checkboxLabel}>
            <input name="showPassword" checked={data.showPassword} type="checkbox" onChange={handleInput}/>
            show/hide
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </>
  );
}

export default LoginForm;