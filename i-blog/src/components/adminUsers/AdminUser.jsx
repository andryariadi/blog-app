import { getUsers } from "@/libs/database/data";
import styles from "./adminuser.module.css";
import { deleteUser } from "@/libs/database/actions/action";
import Image from "next/image";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default async function AdminUsers() {
  const users = (await getUsers())?.sort((a, b) => a.username.localeCompare(b.username));

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
              <button className={styles.deleteBtn}>
                <RiDeleteBin6Fill size={23} color="#871132" />
              </button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}
