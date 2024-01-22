import Image from "next/image";
import NavLinks from "./navLinks/NavLink";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Image src="/images/logo.svg" alt="logo" width={150} height={150} className="logo" />
        </div>
        <div>
          <NavLinks />
        </div>
      </div>
    </>
  );
}
