import { useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: email,
        password,
      }),
    });

    const result = await response.json();

    console.log(result.token);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.fields}>
        <div className={styles.field}>
          <div className={styles.fieldIcon}>
            <i className="bx bxs-envelope"></i>
          </div>
          <div className={styles.fieldItem}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.fieldIcon}>
            <i className="bx bxs-key"></i>
          </div>
          <div className={styles.fieldItem}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="*********"
            />
          </div>
        </div>
      </div>
      <button className={styles.loginButton}>Register</button>
      <p className={styles.loginFooter}>
       <Link to ="/login">Login</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
