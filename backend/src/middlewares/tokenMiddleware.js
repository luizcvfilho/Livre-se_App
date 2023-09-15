const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");


const tokenMiddleware = (req, res, next) => {
  const PRIV_KEY = fs.readFileSync(
    path.join(__dirname, "..", "..", "id_rsa_priv.pem"),
    "utf8"
  );


  const token = req.headers["authorization"];

  

  // const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;

  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing" });
  }

  jwt.verify(token, PRIV_KEY, (err, decoded) => {
  
    if (err) {
      return res
        .status(401)
        .json({ message: "Authorization token is invalid or expired" });
    } else {
      req.user = decoded;
      next();
    }
  });
};

module.exports = tokenMiddleware;
