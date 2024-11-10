import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import postRoute from "./routes/postroutes.js";
import authRoute from "./routes/authroutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
await connectDB();

// List of allowed origins
const allowedOrigins = [
  "http://localhost:5173", // Frontend on localhost
  "http://127.0.0.1:5173",
  "http://localhost:8080",
  "http://127.0.0.1:8080",
];

// CORS middleware with detailed handling
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"], // List all allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
    credentials: true, // Allow cookies and credentials
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/post/", postRoute);
app.use("/api/auth/", authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
