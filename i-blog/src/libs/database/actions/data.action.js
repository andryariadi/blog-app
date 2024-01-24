import Post from "../models/post.model";
import { connectToDB } from "./index";

export const getPosts = async () => {
  try {
    connectToDB();

    const posts = await Post.find();

    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};
