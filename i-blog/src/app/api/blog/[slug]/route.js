import { connectToDB } from "@/libs/database";
import Post from "@/libs/database/models/post.model";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDB();

    const post = await Post.findOne({ slug });

    if (!post) {
      return NextResponse.json("Post not found!", { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch detail post!");
  }
};

export const DELETE = async (request, id) => {
  const { id } = params;
  try {
    connectToDB();

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return NextResponse.json("Post not found!", { status: 404 });
    }

    return NextResponse.json("Post deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete post!");
  }
};

export const UPDATE = async (request, { params, body }) => {
  const { id } = params;
  try {
    connectToDB();

    // Dapatkan data pos yang ingin diperbarui dari body permintaan
    const { title, content } = body;

    // Temukan dan perbarui pos berdasarkan ID
    const updatedPost = await Post.findByIdAndUpdate(id, { title, content }, { new: true });

    if (!updatedPost) {
      return NextResponse.json("Post not found!", { status: 404 });
    }

    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update post!");
  }
};
