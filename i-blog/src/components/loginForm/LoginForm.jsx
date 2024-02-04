"use client";

import { useFormState } from "react-dom";

import { login } from "@/libs/database/actions/action";
import styles from "./loginform.module.css";
import Link from "next/link";
import ButtonLogin from "./ButtonLogin";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <ButtonLogin />
      {state?.error && <p className={styles.error}>{state?.error}</p>}
      <Link href="/register" className={styles.link}>
        {"Don't have an account?"} <b className={styles.register}>Register</b>
      </Link>
    </form>
  );
}
