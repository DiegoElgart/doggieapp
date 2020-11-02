const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

verifyToken = (req, res, next) => {
  let token = req.header("x-access-token");

  if (!token)
    return res.status(403).send({
      message: "No token provided!",
    });

  try {
    const decoded = jwt.verify(token, config.secret);
    req.id = decoded.id;
    next();
  } catch (ex) {
    res.status(400).send({ message: "Invalid Token" });
  }
};

const authJwt = {
  verifyToken: verifyToken,
};
module.exports = authJwt;
