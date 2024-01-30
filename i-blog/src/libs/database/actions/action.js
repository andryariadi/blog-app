"use server";

import { signIn, signOut } from "@/libs/auth/auth";
import { connectToDB } from "..";
import User from "../models/user.model";
import bcrypt from "bcrypt";

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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      imgUrl,
    });

    await newUser.save();
    console.log("User created to DB");
  } catch (error) {
    console.log(error);
    return { error: "Failed to register!" };
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    return { error: "Failed to login!" };
  }
};
