"use client";

import styles from "./socialmedia.module.css";
import Lottie from "lottie-react";
import discord from "@/libs/icons/discord.json";
import discord2 from "@/libs/icons/discord2.json";
import instagram from "@/libs/icons/instagram.json";
import github from "@/libs/icons/github.json";
import linkedin from "@/libs/icons/linkedin.json";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <>
      <div className={styles.brandContainer}>
        <Link href="/">
          <Lottie animationData={linkedin} loop={true} />
        </Link>
        <Link href="/">
          <Lottie animationData={github} loop={true} />
        </Link>
        <Link href="/">
          <Lottie animationData={instagram} loop={true} />
        </Link>
        <Link href="/">
          <Lottie animationData={discord2} loop={true} />
        </Link>
      </div>
    </>
  );
}
