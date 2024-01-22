"use client";

import styles from "./navLinks.module.css";
import Links from "./links/Links";
import { useState } from "react";

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
export default function NavLinks() {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          {links.map((link) => (
            <Links item={link} key={link.title} />
          ))}
          {session ? (
            <>
              {isAdmin && <Links item={{ title: "Admin", path: "/admin" }} />}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <Links item={{ title: "Login", path: "/login" }} />
          )}
        </div>
        <button className={styles.menuBtn} onClick={() => setOpen((prev) => !prev)}>
          Menu
        </button>
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
