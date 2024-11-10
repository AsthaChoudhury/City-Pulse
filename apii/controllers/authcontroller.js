import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import PoSt from "../models/post.js";
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  res.status(201).json({ message: "User registered successfully" });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare(password, user.password))) {
    console.log("JWT Secret:", process.env.JWT_SECRET);
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
};

export const logout = (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
};

export const savePost = async (req, res) => {
  const { postId } = req.body;
  try {
    const user = await User.findById(req.user.id);
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (user.savedList.includes(postId)) {
      return res.status(400).json({ message: "Post already saved" });
    }

    user.savedList.push(postId);
    await user.save();

    res.status(200).json({ message: "Post saved successfully" });
  } catch (error) {
    console.error("Error saving post:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const removeSavedPost = async (req, res) => {
  const { postId } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user.savedList.includes(postId)) {
      return res.status(400).json({ message: "Post not in saved list" });
    }
    user.savedList = user.savedList.filter((id) => id.toString() !== postId);
    await user.save();

    res.status(200).json({ message: "Post removed from saved list" });
  } catch (error) {
    console.error("Error removing post:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update
export const updateUser = async (req, res) => {
  const { username, email, password, avatar } = req.body;

  try {
    const userId = req.user.id;
    console.log(userId);
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (username) user.username = username;
    if (email) user.email = email;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 12);
      user.password = hashedPassword;
    }
    if (avatar) user.avatar = avatar;
    await user.save();
    const { password: _, ...updatedUser } = user.toObject();
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error" });
  }
};
