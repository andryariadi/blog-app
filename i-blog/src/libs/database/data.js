import Post from "./models/post.model";
import { connectToDB } from "./index";
import User from "./models/user.model";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 6;

  try {
    connectToDB();

    const count = await Post.find({ title: { $regex: regex } }).count();
    const posts = await Post.find({ title: { $regex: regex } })
      .sort({ title: 1 })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    const getAllPosts = await Post.find();

    return { count, posts, getAllPosts };
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

export const getUsers = async (query) => {
  const regex = new RegExp(query, "i");

  try {
    connectToDB();
    const users = await User.find({ username: { $regex: regex } }).sort({ username: 1 });
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
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
