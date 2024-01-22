"use client";

import Link from "next/link";
import styles from "./links.module.css";
import { usePathname } from "next/navigation";

export default function Links({ item }) {
  const pathName = usePathname();
  return (
    <>
      <div className={`${styles.container} ${pathName === item.path && styles.active}`}>
        <Link href={item.path}>{item.title}</Link>
      </div>
    </>
  );
}
