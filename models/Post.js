import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      unique: true,
      required: true,
    },
    img: {
      type: String,
      unique: true,
      required: true,
    },
    content: {
        type: String,
        unique: true,
        required: true,
      },
      username: {
        type: String,
        unique: true,
        required: true,
      },
  },
  { timestamps: true }
);

export default mongoose.model("User", PostSchema);
