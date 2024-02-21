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

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDB();

    const deletedPost = await Post.findOneAndDelete({ slug });

    if (!deletedPost) {
      return NextResponse.json("Post not found!", { status: 404 });
    }

    return NextResponse.json("Post deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete post!");
  }
};

export const PUT = async (request, { params }) => {
  const { slug } = params;
  try {
    if (!slug) {
      throw new Error("Slug is missing!");
    }

    connectToDB();

    const { title, content } = await request.json();

    const updatedProduct = await Post.findOneAndUpdate({ slug }, { title, content }, { new: true });

    if (!updatedProduct) {
      return NextResponse.json({ error: "Product not found!" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product updated successfully!", updatedProduct }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to update product!" }, { status: 500 });
  }
};
