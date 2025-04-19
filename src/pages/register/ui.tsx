import { useContext, useEffect, useState } from 'react'

import { IUserTokenContext, UserTokenContext } from '../../App'
import styles from './style.module.css'
import RegisterForm from '../../features/registerForm/ui.tsx'
import { Link } from 'react-router-dom'

interface IUser {
  picture: string
  email: string
}

const RegisterPage = () => {
  const { token } = useContext<IUserTokenContext>(UserTokenContext)
  const [user, setUser] = useState<IUser | null>(null)

  async function getUser() {
    const res = await fetch("https://www.googleapis.com/oauth2/v1/userinfo", {
      method: "GET",
      headers: {
        "AUTHORIZATION": `Bearer ${token}`
      }
    })

    const result = await res.json()

    setUser(result)
  }

  console.log(user);

  useEffect(() => {
    if(token) {
      getUser()
    }
  }, [token])

  return (
    <div className={styles.register}>
      <div className={styles.registerLeft}>
        <img src={user ? user.picture : "https://static.vecteezy.com/system/resources/previews/030/985/874/non_2x/anonymous-icon-vector.jpg"} alt="register Image" />
        <h1 className={styles.userName}>{user ? user.email : "You are not authorization!" }</h1>
      </div>
      <div className={styles.registerRight}>
        <h5 className={styles.registerRightTitle}>Page for <span className={styles.registerRightTitleMark}>Register</span></h5>
        <span className={styles.separator}>OR</span>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage