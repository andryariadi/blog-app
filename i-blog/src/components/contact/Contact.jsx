"use client";

import Image from "next/image";
import styles from "./contact.module.css";

import { motion } from "framer-motion";
import { fadeIn } from "../../libs/motions/variants";

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <motion.div variants={fadeIn("down", 0.1)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className={styles.imgContainer}>
          <Image src="/images/contact.svg" alt="contact" fill className={styles.contactImg} />
        </motion.div>
        <motion.div variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className={styles.formContainer}>
          <form action="" className={styles.form}>
            <input type="text" placeholder="Name and Surname" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number (Optional)" />
            <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </motion.div>
      </div>
    </>
  );
}
