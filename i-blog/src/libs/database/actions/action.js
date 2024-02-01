"use server";

import { signIn, signOut } from "@/libs/auth/auth";
import { connectToDB } from "..";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, passwordRepeat, imgUrl } = Object.fromEntries(formData);

  if (password !== passwordRepeat) return { error: "Passwords do not match" };

  try {
    connectToDB();

    const userByUsername = await User.findOne({ username });
    const userByEmail = await User.findOne({ email });

    if (userByUsername) return { error: "Username already exists" };
    if (userByEmail) return { error: "Email already exists" };

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

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Failed to register!" };
  }

  // revalidatePath("/login");
  // redirect("/login");
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);

    if (error.type === "CredentialsSignin") return { error: "Invalid Username or Password!" };

    throw error;
  }
};
