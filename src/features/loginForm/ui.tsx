import styles from "./styles.module.css"

const LoginForm = () => {
  return (
    <>
    <div className={styles.fields}>
          <div className={styles.field}>
            <div className={styles.fieldIcon}>
              <i className='bx bxs-envelope'></i>
            </div>
            <div className={styles.fieldItem}>
              <label htmlFor="email">Email</label>
              <input id='email' type="email" placeholder='example@gmail.com' />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.fieldIcon}>
              <i className='bx bxs-key' ></i>
            </div>
            <div className={styles.fieldItem}>
              <label htmlFor="password">Password</label>
              <input id='password' type="password" placeholder='*********' />
            </div>
          </div>
        </div>
        <div className={styles.options}>
          <div className={styles.optionsCheckbox}>
            <input type="checkbox" />
            Remember me
          </div>
          <a href="">Forgot password?</a>
        </div>
        <button className={styles.loginButton}>Login</button>
        <p className={styles.loginFooter}>Don't have an account? <a href="">Register</a> </p>
       </>
  )
}
 
export default LoginForm