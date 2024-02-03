"use client";

import { addPost } from "@/libs/database/actions/action";
import styles from "./postform.module.css";
import { useFormState } from "react-dom";
import { IoAddCircle } from "react-icons/io5";

export default function AdminPostForm({ userId }) {
  const [state, formAction] = useFormState(addPost, undefined);
  // const { pending } = useFormStatus();
  return (
    <>
      <form action={formAction} className={styles.container}>
        <h1>Add New Post</h1>
        <input type="hidden" name="userId" value={userId} />
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Slug" name="slug" />
        <input type="text" placeholder="Image Url" name="imgUrl" />
        <textarea placeholder="Description" name="desc" id="" rows="10"></textarea>
        <button>
          <div>
            <IoAddCircle size={20} />
          </div>
          <span className={styles.btnTitle}>Add</span>
        </button>
        {state?.error && <p className={styles.error}>{state?.error}</p>}
      </form>
    </>
  );
}
