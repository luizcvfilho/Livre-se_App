const User = require("../models/User");

const moderatorMiddleware = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user.dataValues.moderator == true) return next();
    else return res.status(401).json({ Error: "Not authorized" });
  } catch (err) {
    return res.status(500).json({ Error: "Internal server Error" });
  }
};

module.exports = moderatorMiddleware;
