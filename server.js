import path from "path";
import url from "url";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import db from "./src/config/connection.js";
import usersRouter from "./src/routes/users.js";
import postsRouter from "./src/routes/posts.js";

dotenv.config();

// Constants
const app = express();
const PORT = process.env.PORT || 3000;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "frontend/dist")));

// API Routes
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);

// Handle React routing, return all requests to React app
app.use(/(.*)/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!" });
});

// Starts server and connects to database
db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
