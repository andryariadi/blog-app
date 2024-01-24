"use client";

import Image from "next/image";
import styles from "./home.module.css";
import SocialMedia from "@/components/socilamedia/SocialMedia";

import { motion } from "framer-motion";
import { fadeIn } from "../libs/motions/variants";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <motion.h1 variants={fadeIn("up", 0.1)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className={styles.title}>
            Creative Thoughts Agency.
          </motion.h1>
          <motion.p variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className={styles.desc}>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis adipisci minima reiciendis a autem assumenda dolore.
          </motion.p>
          <motion.div variants={fadeIn("up", 0.7)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className={styles.btnContainer}>
            <button className={styles.btn}>Learn More</button>
            <button className={styles.btn}>Contact</button>
          </motion.div>
          <motion.div variants={fadeIn("up", 0.9)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
            <SocialMedia />
          </motion.div>
        </div>
        <motion.div variants={fadeIn("down", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className={styles.imgContainer}>
          <Image src="/images/hero.gif" alt="hero" fill className={styles.heroImg} />
        </motion.div>
      </div>
    </>
  );
}
