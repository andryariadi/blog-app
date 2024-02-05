import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminPosts/AdminPosts";
import AdminPostForm from "@/components/adminPostForm/AdminPostForm";
import AdminUsers from "@/components/adminUsers/AdminUser";
import AdminUserForm from "@/components/adminUserForm/AdminUserForm";
import { auth } from "@/libs/auth/auth";

export const metadata = {
  title: "Admin",
  description: "andry ariadi blog admin description",
};

export default async function AdminPage({ searchParams }) {
  console.log(searchParams, "<--adminpage");
  const session = await auth();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Suspense fallback={<div>Loading...</div>}>
              <AdminPosts searchParams={searchParams} />
            </Suspense>
          </div>
          <div className={styles.col}>
            <AdminPostForm userId={session.user.id} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <Suspense fallback={<div>Loading...</div>}>
              <AdminUsers searchParams={searchParams} />
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
