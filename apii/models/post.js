import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  title: String,
  address: String,
  city: String,
  latitude: String,
  longitude: String,
  images: [String],
  details: {
    PriceForTwo: Number,
    opening: Number,
    mail: String,
    num: String,
    webs: String,
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Post", postSchema);
