import { useContext, useEffect, useState } from 'react'
import LoginForm from '../../features/loginForm/ui'
import OutsiderLogin from '../../features/outsiderLogin/ui.tsx'

import styles from './style.module.css'
import { IUserTokenContext, UserTokenContext } from '../../App.tsx'


interface IUser{
  picture: string
  email: string
}

const LoginPage = () => {
  const { token } = useContext<IUserTokenContext>(UserTokenContext)
  const [user, setUser] = useState<IUser | null>(null)
  
  async function getUser() {
    const res = await  fetch("https://www.googleapis.com/oauth2/v1/userinfo", {
      method: "GET",
      headers: { 
        "AUTHORIZATION": `Bearer ${token}`
    }
    })
  const result = await res.json()

    setUser(result)
  
  }
  useEffect(() => {
    if(token){
      getUser()
    }
  }, [token])

  console.log(user)
 

return (
    <div className={styles.login}>
      <div className={styles.loginLeft}>
        <img src={user ? user.picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLOL6w6szUHhWjxAHmvDrqCI-IaUE52PdRhg&s"} alt="Login Image" />
        <h1 className={styles.username}>{user ? user.email : "You are not registered!"}</h1>
      </div>
      <div className={styles.loginRight}>
       <OutsiderLogin buttonText={"Login with Google"} imageUrl={"./google-logo.png"} />
        <h5 className={styles.loginRightTitle}>Welcome to <span>best Design  School</span></h5>
        <span className={styles.separator}>OR</span>
         <LoginForm />
      </div>
    </div>
  )
}



export default LoginPage