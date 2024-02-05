"use client";

import Lottie from "lottie-react";
import User from "@/libs/icons/user.json";

export default function SkeletonUser() {
  return (
    <>
      <div style={{ width: "25%" }}>
        <Lottie animationData={User} loop={true} />
      </div>
    </>
  );
}
