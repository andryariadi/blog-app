import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminPosts/AdminPosts";
import AdminPostForm from "@/components/adminPostForm/AdminPostForm";
import AdminUsers from "@/components/adminUsers/AdminUser";
import AdminUserForm from "@/components/adminUserForm/AdminUserForm";

export default function AdminPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Suspense fallback={<div>Loading...</div>}>
              <AdminPosts />
            </Suspense>
          </div>
          <div className={styles.col}>
            <AdminPostForm />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <Suspense fallback={<div>Loading...</div>}>
              <AdminUsers />
            </Suspense>
          </div>
          <div className={styles.col}>
            <AdminUserForm />
          </div>
        </div>
      </div>
    </>
  );
}
