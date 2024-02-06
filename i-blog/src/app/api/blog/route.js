import { connectToDB } from "@/libs/database";
import Post from "@/libs/database/models/post.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectToDB();

    const posts = await Post.find().sort({ createdAt: -1 });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};
