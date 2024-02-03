"use client";

import { addPost } from "@/libs/database/actions/action";
import styles from "./postform.module.css";
import { useFormState } from "react-dom";

export default function AdminPostForm({ userId }) {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <>
      <form action={formAction} className={styles.form}>
        <h1>Add New Post</h1>
        <input type="hidden" name="userId" value={userId} />
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Slug" name="slug" />
        <input type="text" placeholder="Image Url" name="imgUrl" />
        <textarea placeholder="Description" name="desc" id="" rows="10"></textarea>
        <button>Add</button>
        {state?.error && <p className={styles.error}>{state?.error}</p>}
      </form>
    </>
  );
}
