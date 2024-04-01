import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      index: true,
    },
    lastname: {
      type: String,
      required: true,

      unique: true,
      index: true,
    },
    contact: {
      type: String,
      required: true,

      unqiue: true,
      index: true,
    },
    email: {
      type: String,

      unique: true,
      index: true,
    },
    password: {
      type: String,

      index: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
