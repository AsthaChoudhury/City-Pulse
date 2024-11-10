// import jwt from "jsonwebtoken";
// import User from "../models/user.js";

// // const authMiddleware = async (req, res, next) => {
// //   const token = req.header("Authorization")?.replace("Bearer ", "");
// //   if (!token) {
// //     console.log("No token provided");
// //     return res.status(401).json({ message: "Unauthorized" });
// //   }

// //   try {
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     console.log("Decoded token:", decoded); // Log the decoded token for debugging
// //     req.user = await User.findById(decoded.id);
// //     if (!req.user) {
// //       console.log("User not found");
// //       return res.status(401).json({ message: "Unauthorized" });
// //     }
// //     next();
// //   } catch (error) {
// //     console.error("Token verification error:", error); // Log any errors during verification
// //     res.status(401).json({ message: "Invalid token" });
// //   }
// // };

// const authMiddleware = async (req, res, next) => {
//   const token = req.header("Authorization")?.replace("Bearer ", "");
//   console.log("Received Token:", token);
//   if (!token) return res.status(401).json({ message: "No token provided" });
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.id);
//     console.log("Decoded User ID:", decoded.id);
//     next();
//   } catch (error) {
//     console.log("Error verifying token:", error);
//     res.status(401).json({ message: "Invalid token" });
//   }
// };

// export default authMiddleware;

import jwt from "jsonwebtoken";
import User from "../models/user.js";

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log("Received Token:", token);

  if (!token) {
    console.log("No token provided");
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is not defined in environment variables");
    return res
      .status(500)
      .json({ message: "Server error: JWT secret missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded User ID:", decoded.id);

    req.user = await User.findById(decoded.id);
    if (!req.user) {
      console.log("User not found");
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    next();
  } catch (error) {
    console.log("Error verifying token:", error.message);
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
