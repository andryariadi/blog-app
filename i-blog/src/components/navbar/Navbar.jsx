import Image from "next/image";
import NavLinks from "./navLinks/NavLink";
import styles from "./navbar.module.css";
import Link from "next/link";
import { auth } from "@/libs/auth/auth";

export default async function Navbar() {
  const session = await auth();

  // console.log(session, "<-----dinavbar");
  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.svg" alt="logo" width={140} height={140} className="logo" />
        </Link>
        <div>
          <NavLinks session={session} />
        </div>
      </div>
    </>
  );
}
