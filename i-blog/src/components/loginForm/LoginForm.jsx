"use client";

import { useFormState } from "react-dom";

import { login } from "@/libs/database/actions/action";
import styles from "./loginform.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();
  //   console.log({ state }, "<--registerform");

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error && <p className={styles.error}>{state?.error}</p>}
      <Link href="/register" className={styles.link}>
        {"Don't have an account?"} <b className={styles.login}>Register</b>
      </Link>
    </form>
  );
}
