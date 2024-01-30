"use client";

import { useFormState } from "react-dom";

import { register } from "@/libs/database/actions/action";
import styles from "./registerform.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state, router]);

  console.log({ state }, "<--registerform");
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input type="password" placeholder="password again" name="passwordRepeat" />
      <button>Register</button>
      {state?.error && <p className={styles.error}>{state?.error}</p>}
      <Link href="/login">
        Have an account? <b className={styles.login}>Login</b>
      </Link>
    </form>
  );
}
