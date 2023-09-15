const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Products = sequelize.define("Products", {
  
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publishers: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  publicationYear: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

// Associations
Products.associate = function (models) {
  Products.belongsToMany(models.User, {
    through: "Favorites",
    as: "favorited",
    foreignKey: "productuserid",
  });

  Products.belongsToMany(models.Cart, {
    through: "CartProducts",
    as: "Cartin",
    foreignKey: "productcartid",
  });
};

module.exports = Products;
