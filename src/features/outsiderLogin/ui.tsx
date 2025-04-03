import { useGoogleLogin } from "@react-oauth/google";
import styles from "./styles.module.css";
import { useContext } from "react";
import { UserTokenContext } from "../../App";

interface IOutsiderLogin {
  imageUrl: string;
  buttonText: string;
}

const OutsiderLogin = (props: IOutsiderLogin) => {
  const { setToken } = useContext(UserTokenContext);

  const login = useGoogleLogin({
    onSuccess: (result) => {
      setToken(result.access_token);
    },
    onError: () => {},
  });

  return (
    <button onClick={() => login()} className={styles.outsiderLoginButton}>
      <img src={props.imageUrl} alt="" />
      {props.buttonText}
    </button>
  );
};

export default OutsiderLogin;
