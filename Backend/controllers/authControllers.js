import User from "../models/userModelSchema.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    // const { fullName, userName, password, confirmPassword, gender } = req.body;
    const { fullName, userName, password } = req.body;

    // if (password !== confirmPassword)
    //   return res.status(400).json({ error: "Password didnt match" });

    const user = await User.findOne({ userName });
    if (user) return res.status(400).json({ error: "user already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}&size=64`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}&size=64`;

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      // gender,
      // profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
    }

    return res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      userName: newUser.userName,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log("Error is sign up controller ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(400).json({ error: "Invalid username " });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ error: "Invalid  password" });

    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error is sign up controller ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error is sign up controller ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const checkingAuthUser = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in getting auth user");
    res.status(500).json({ message: error.message });
  }
};
