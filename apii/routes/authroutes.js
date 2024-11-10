import express from "express";
import {
  register,
  login,
  getUser,
  savePost,
  removeSavedPost,
  updateUser,
} from "../controllers/authcontroller.js";
const router = express.Router();
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/register", register);
router.post("/savePost", authMiddleware, savePost);
router.post("/removeSavedPost", authMiddleware, removeSavedPost);
router.get("/me", authMiddleware, getUser);
router.post("/login", login);
router.put("/update", authMiddleware, updateUser);
router.post("/", (req, res) => {
  res.json({ message: "Logged out successfully" });
});
router.post("/logout", (req, res) => {
  res.json({ message: "Logged out successfully" });
});

export default router;
