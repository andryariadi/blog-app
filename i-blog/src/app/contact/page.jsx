import Image from "next/image";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/images/contact.svg" alt="contact" fill className={styles.contactImg} />
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <input type="text" placeholder="Name and Surname" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number (Optional)" />
            <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
