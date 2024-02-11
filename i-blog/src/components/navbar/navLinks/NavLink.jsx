"use client";

import UseAnimations from "react-useanimations";
import menu from "react-useanimations/lib/menu2";
import styles from "./navLinks.module.css";
import Links from "./links/Links";
import { useState } from "react";
import { handleLogout } from "@/libs/database/actions/action";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
export default function NavLinks({ session }) {
  const [open, setOpen] = useState(false);

  // const isAdmin = true;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          {links.map((link) => (
            <Links item={link} key={link.title} />
          ))}
          {session?.user ? (
            <>
              {session.user?.isAdmin && <Links item={{ title: "Admin", path: "/admin" }} />}
              <form action={handleLogout}>
                <button className={styles.logout}>Logout</button>
              </form>
            </>
          ) : (
            <Links item={{ title: "Login", path: "/login" }} />
          )}
        </div>
        <UseAnimations className={styles.menuBtn} animation={menu} size={50} onClick={() => setOpen((prev) => !prev)} />

        {open && (
          <div className={styles.mobileLink}>
            {links.map((link) => (
              <Links item={link} key={link.title} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
