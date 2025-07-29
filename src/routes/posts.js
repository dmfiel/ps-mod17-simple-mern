import express from "express";
import Post from "../models/Post.js";
import { authMiddleware } from "../utils/auth.js";

const router = new express.Router();

router.use(authMiddleware);

router.get("/", async (_, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      author: req.user._id,
    });
    res.json(newPost);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

export default router;
