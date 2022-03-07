import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./style.module.scss";

export function SignInButton() {
  const isUserLogged = true;

  return isUserLogged ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#84d361" />
      Henrique Nobre
      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
