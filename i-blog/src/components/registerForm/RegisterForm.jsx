"use client";

import { useFormState } from "react-dom";

import { register } from "@/libs/database/actions/action";
import styles from "./registerform.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ButtonRegister from "./ButtonRegister";
export default function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  //   console.log({ state }, "<--registerform");

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input type="password" placeholder="Confirm password" name="passwordRepeat" />
      <ButtonRegister />
      {state?.error && <p className={styles.error}>{state?.error}</p>}
      <Link href="/login" className={styles.link}>
        Have an account? <b className={styles.login}>Login</b>
      </Link>
    </form>
  );
}
