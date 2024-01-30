import { register } from "@/libs/database/actions/action";
import styles from "./register.module.css";

export default function RegisterPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form action={register} className={styles.form}>
            <input type="text" placeholder="username" name="username" />
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <input type="text" placeholder="password again" name="passwordRepeat" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </>
  );
}
