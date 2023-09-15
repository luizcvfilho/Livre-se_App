const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Cart = sequelize.define("Cart", {
  amount: {
    type: DataTypes.INTEGER,
  },
  point: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.DOUBLE,
  },
  payment: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Cart.associate = function (models) {
  Cart.belongsTo(models.User, { foreignKey: "userId" });
  Cart.belongsToMany(models.Products, {
    through: "CartProducts",
    as: "Cartin",
    foreignKey: "cartproductid",
  });
};

module.exports = Cart;
