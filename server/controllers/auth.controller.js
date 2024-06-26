import User from "../models/user.model.js";

import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export const signup = async (req, res, next) => {
  const { firstname, lastname, contact, email, password } = req.body;
  const saltRounds = 10;
  var salt = bcrypt.genSaltSync(saltRounds);
  var hashedPassword = bcrypt.hashSync(password, salt);

  const newUser = new User({
    firstname,
    lastname,
    contact,
    email: email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });

    if (!validUser) return next(errorHandler(404, "User not found"));

    const validPassword = bcrypt.compareSync(password, validUser.password);

    if (!validPassword) return next(errorHandler(401, "invalid credentials"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now())
      .cookie("acces_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
