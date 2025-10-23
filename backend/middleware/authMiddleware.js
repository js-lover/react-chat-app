import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "gecici anahtar"
      );
      //dikkat
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Token geçersiz" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Token yok, yetkisiz" });
  }
};
