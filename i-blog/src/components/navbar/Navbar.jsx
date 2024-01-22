import Image from "next/image";
import NavLinks from "./navLinks/NavLink";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/images/logo.svg" alt="logo" width={140} height={140} className="logo" />
        </div>
        <div>
          <NavLinks />
        </div>
      </div>
    </>
  );
}
