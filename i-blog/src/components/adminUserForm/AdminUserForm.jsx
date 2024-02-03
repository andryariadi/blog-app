"use client";

import { addUser } from "@/libs/database/actions/action";
import styles from "./userform.module.css";
import { useFormState } from "react-dom";
import { useRef } from "react";
import ButtonUser from "./ButtonUser";

export default function AdminUserForm() {
  const [state, formAction] = useFormState(addUser, undefined);
  const ref = useRef(null);
  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();

          await formAction(formData);
        }}
        className={styles.container}
      >
        <h1>Add New User</h1>
        <input type="text" placeholder="Username" name="username" />
        <input type="email" placeholder="Email Address" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input type="text" placeholder="Image Url" name="imgUrl" />
        <select name="isAdmin">
          <option selected disabled>
            Role ?
          </option>
          <option value="false">User</option>
          <option value="true">Admin</option>
        </select>
        <ButtonUser />
        {state?.error && <p className={styles.error}>{state?.error}</p>}
      </form>
    </>
  );
}
