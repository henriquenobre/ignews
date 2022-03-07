import { SignInButton } from "../SignInButton";
import styles from "./style.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/logo.svg" alt="" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
