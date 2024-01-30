import Image from "next/image";
import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/images/register.svg" alt="register" fill className={styles.registerImg} />
        </div>
        <div className={styles.formContainer}>
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
