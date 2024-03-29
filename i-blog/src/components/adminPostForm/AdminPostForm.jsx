"use client";

import { addPost } from "@/libs/database/actions/action";
import styles from "./postform.module.css";
import { useFormState } from "react-dom";
import { useRef } from "react";
import ButtonPost from "./ButtonPost";

export default function AdminPostForm({ userId }) {
  const [state, formAction] = useFormState(addPost, undefined);
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
        <h1>Add New Post</h1>
        <input type="hidden" name="userId" value={userId} />
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Slug" name="slug" />
        <input type="text" placeholder="Image Url" name="imgUrl" />
        <textarea placeholder="Description" name="desc" id="" rows="7"></textarea>
        <ButtonPost />
        {state?.error && <p className={styles.error}>{state?.error}</p>}
      </form>
    </>
  );
}
