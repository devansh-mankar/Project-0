import User from "../models/user.model.js";
import CryptoJS from "crypto-js";
import pkg from "crypto-js";
const { PBKDF2, SHA256, HmacSHA512 } = pkg;
var salt = CryptoJS.lib.WordArray.random(128 / 8);

export const signup = async (req, res, next) => {
  const { firstName, lastName, contactNo, email, password } = req.body;

  const hashedFname = CryptoJS.SHA256(firstName);
  const hashedLname = CryptoJS.SHA256(lastName);

  const hashedContact = CryptoJS.SHA256(contactNo);

  const hashedPassword = CryptoJS.HmacSHA1(password, salt, {
    keySize: 512 / 32,
  });

  const hashedEmail = CryptoJS.SHA256(email);

  const newUser = new User({
    firstName: hashedFname,
    lastName: hashedLname,
    contactNo: hashedContact,
    email: hashedEmail,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    next(error);
  }
};
