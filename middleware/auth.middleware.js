export const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (username != "ganesh" || password != "1234") {
    return res.status(403).json({
      message: "Incorrect Auth Info!",
    });
  }
  next();
};
