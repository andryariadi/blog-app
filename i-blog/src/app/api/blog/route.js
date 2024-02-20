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

// Fungsi untuk membuat pos baru
export const POST = async (request, { body }) => {
  try {
    connectToDB();

    // Ekstrak data dari tubuh permintaan
    const { title, content, slug } = body;

    // Buat pos baru
    const newPost = new Post({
      title,
      content,
      slug,
    });

    // Simpan pos baru ke database
    await newPost.save();

    return NextResponse.json(newPost, { status: 201 }); // Kode status 201 menunjukkan pos berhasil dibuat
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create post!");
  }
};
