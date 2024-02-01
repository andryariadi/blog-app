import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin } from "@/libs/database/actions/action";
import Image from "next/image";

export default function LoginPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/images/login.svg" alt="login" fill className={styles.loginImg} />
        </div>
        <div className={styles.formContainer}>
          <form action={handleGithubLogin}>
            <button className={styles.githubBtn}>Login with Github</button>
          </form>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
