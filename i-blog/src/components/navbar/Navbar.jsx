import Image from "next/image";
import NavLinks from "./navLinks/NavLink";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.svg" alt="logo" width={140} height={140} className="logo" />
        </Link>
        <div>
          <NavLinks />
        </div>
      </div>
    </>
  );
}
