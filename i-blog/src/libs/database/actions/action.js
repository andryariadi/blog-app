"use server";

import { signIn, signOut } from "@/libs/auth/auth";
import { connectToDB } from "..";
import User from "../models/user.model";
import Post from "../models/post.model";
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

export const addPost = async (previousState, formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("Post created to DB");

    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Failed to add post!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.findByIdAndDelete(id);
    console.log("Post deleted from DB");

    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Failed to delete post!" };
  }
};

export const addUser = async (previousState, formData) => {
  const { username, email, password, imgUrl } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newUser = new User({
      username,
      email,
      password,
      imgUrl,
    });

    await newUser.save();
    console.log("User created to DB");

    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Failed to add user!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("User deleted from DB");

    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Failed to delete user!" };
  }
};
