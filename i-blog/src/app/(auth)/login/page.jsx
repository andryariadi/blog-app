import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin, handleGoogleLogin } from "@/libs/database/actions/action";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form action={handleGithubLogin}>
            <button className={styles.oAuth}>
              <div>
                <BsGithub size={30} />
              </div>
              <span>GitHub</span>
            </button>
          </form>
          <form action={handleGoogleLogin}>
            <button className={styles.oAuth}>
              <div>
                <FcGoogle size={30} />
              </div>
              <span>Google</span>
            </button>
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
