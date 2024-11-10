import Post from "../models/post.js";

// Create a new post
export const createPost = async (req, res) => {
  const { title, address, city, latitude, longitude, images, details } =
    req.body;
  const post = new Post({
    title,
    address,
    city,
    latitude,
    longitude,
    images,
    details,
    createdBy: req.user.id,
  });
  await post.save();
  res.status(201).json(post);
};

// Get all posts
export const getAllPosts = async (req, res) => {
  const posts = await Post.find().populate("createdBy", "username");
  res.json(posts);
};

// Get a single post
export const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id).populate(
    "createdBy",
    "username"
  );
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
};

// Update a post
export const updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
};

// Delete a post
export const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json({ message: "Post deleted successfully" });
};
