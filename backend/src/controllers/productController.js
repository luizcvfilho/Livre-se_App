const Products = require('../models/Products');


const index = async (req, res) => {
  try {
    const product = await Products.findAll();
    return res.status(200).json({ product });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const show = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findByPk(id);
    return res.status(200).json({ product });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const create = async (req, res) => {
  try {
    const newProduct = {
      author: req.body.author,
      title: req.body.title,
      publishers: req.body.publishers,
      genre: req.body.genre,
      synopsis: req.body.synopsis,
      publicationYear: req.body.publicationYear,
      price: req.body.price,
      image: req.body.image,
      quantity: req.body.quantity,
      condition:req.body.condition
    };
    const product = await Products.create(newProduct);
    return res.status(201).json({ messege: "Product Created", product });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.update(req.body, { where: { id: id } });
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.destroy({ where: { id: id } });
    return res.status(200).json({ message: "Product deleted", product });
  } catch (err) {
    return res.status(500).json({ err });
  }
};











module.exports = {
  index,
  show,
  create,
  update,
  destroy
};