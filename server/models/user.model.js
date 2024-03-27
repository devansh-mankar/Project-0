import mongoose, { mongo } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      index: true,
    },
    lastName: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    contactNo: {
      type: String,
      required: true,
      unqiue: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
userSchema.plugin(uniqueValidator, { message: "is already taken." });
const User = mongoose.model("User", userSchema);
export default User;
