import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin, handleGoogleLogin } from "@/libs/database/actions/action";
import Image from "next/image";

export default function LoginPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form action={handleGithubLogin}>
            <button className={styles.oAuth}>GitHub</button>
          </form>
          <form action={handleGoogleLogin}>
            <button className={styles.oAuth}>Google</button>
          </form>
          <LoginForm />
        </div>
        <div className={styles.imgContainer}>
          <Image src="/images/login.svg" alt="login" fill className={styles.loginImg} />
        </div>
      </div>
    </>
  );
}
