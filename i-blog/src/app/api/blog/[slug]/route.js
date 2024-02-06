import { connectToDB } from "@/libs/database";
import Post from "@/libs/database/models/post.model";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDB();

    const post = await Post.findOne({ slug });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch detail post!");
  }
};

export const DELETE = async (request, id) => {
  try {
    connectToDB();

    await Post.findByIdAndDelete(id);

    return NextResponse.json("Post deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete post!");
  }
};
