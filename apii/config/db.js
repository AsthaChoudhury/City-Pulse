import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Attempting to connect to:", process.env.DATABASE_URL);

    await mongoose.connect(process.env.DATABASE_URL);

    console.log("Database connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
