import { getUsers } from "@/libs/database/data";
import styles from "./adminuser.module.css";
import { deleteUser } from "@/libs/database/actions/action";
import Image from "next/image";

export default async function AdminUsers() {
  const users = await getUsers();

  return (
    <>
      <div className={styles.container}>
        <h1>Users</h1>
        {users?.map((user) => (
          <div className={styles.userContainer} key={user.id}>
            <div className={styles.userDetail}>
              <Image src={user.imgUrl || "/images/noavatar.png"} alt="user" width={50} height={50} className={styles.img} />
              <span className={styles.title}>{user.username}</span>
            </div>
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button className={styles.deleteBtn}>Delete</button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}
