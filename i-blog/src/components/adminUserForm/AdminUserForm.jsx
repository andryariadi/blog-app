"use client";

import { addUser } from "@/libs/database/actions/action";
import styles from "./userform.module.css";
import { useFormState } from "react-dom";
import { IoPersonAddSharp } from "react-icons/io5";

export default function AdminUserForm() {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <>
      <form action={formAction} className={styles.container}>
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
        <button>
          <div>
            <IoPersonAddSharp size={20} />
          </div>
          <span className={styles.btnTitle}>Add</span>
        </button>
        {state?.error && <p className={styles.error}>{state?.error}</p>}
      </form>
    </>
  );
}
