import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({id} , process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};





export const userRegister = async (req, res) => {
  const { username, name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.status(400).json({
        message: "user already exists..",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new user
    const newUser = await User.create({
      username,
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "kayıt basarılı...",
      //JWT
      token: generateToken(User._id),
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      name: newUser.name,
    });
  } catch (error) {
    console.error("Register error: ", error);
    res.status(500).json({ message: "sunucu hatası meydana geldi" });
  }
};

export const userLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({
        message: "Kullanıcı bulunamadı.. :(",
      });
    }

    //sifre karsilastırma

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Hatalı şifre...",
      });
    }

    //if password is corerct....
    res.status(200).json({
      message: "giriş başarılı... :D ",
      //JWT
      token: generateToken(User._id),
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error("lOGİN ERROR: ", error);
    res.status(500).json({
      message: "sunucu hatası",
    });
  }
};
