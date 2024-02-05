import Post from "./models/post.model";
import { connectToDB } from "./index";
import User from "./models/user.model";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async (q) => {
  console.log(q, "<-----datapost");

  const regex = new RegExp(q, "i");

  try {
    connectToDB();
    const posts = await Post.find({ title: { $regex: regex } });
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPostBySlug = async (slug) => {
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch detail posts!");
  }
};

export const getUserById = async (id) => {
  noStore();
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch detail user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
