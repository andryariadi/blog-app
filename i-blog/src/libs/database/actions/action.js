"use server";

import { signIn, signOut } from "@/libs/auth/auth";
import { connectToDB } from "..";
import User from "../models/user.model";

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (formData) => {
  const { username, email, password, passwordRepeat, imgUrl } = Object.fromEntries(formData);

  if (password !== passwordRepeat) return "Passwords do not match";

  try {
    connectToDB();

    const user = await User.findOne({ email });

    if (user) return "User already exists";

    const newUser = new User({
      username,
      email,
      password,
      imgUrl,
    });

    await newUser.save();
    console.log("User created to DB");
  } catch (error) {
    console.log(error);
    return { error: "Failed to register!" };
  }
};
