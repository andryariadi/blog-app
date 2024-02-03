"use client";

import { addUser } from "@/libs/database/actions/action";
import styles from "./userform.module.css";
import { useFormState } from "react-dom";

export default function AdminUserForm({ userId }) {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <>
      <form action={formAction} className={styles.form}>
        <h1>Add New User</h1>
        <input type="hidden" name="userId" value={userId} />
        <input type="text" placeholder="Username" name="username" />
        <input type="email" placeholder="Email Address" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input type="text" placeholder="Role" name="isAdmin" />
        <button>Add</button>
        {state?.error && <p className={styles.error}>{state?.error}</p>}
      </form>
    </>
  );
}
