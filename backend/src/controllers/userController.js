const Cart = require('../models/Cart');
const Evaluate = require('../models/Evaluate');
const Products = require('../models/Products');
const User = require('../models/User');

const Auth = require('../config/auth');


const index = async(req, res) =>{
    try {
    const user = await User.findAll();
    return res.status(200).json({user});
  }catch(err){
    return res.status(500).json({err});
  }
};

const show = async(req, res) => {
  const {id} = req.params;
  try {
    const user = await User.findByPk(id, {include: [{
      model: Cart,
        attributes:['amount','point', 'price', 'payment'],
      
    }, {model: Evaluate,}
  ]
  });
    return res.status(200).json({user});
  }catch(err){
    return res.status(500).json({err});
  }
};

const create = async(req, res) => {
 try {
    const {password} = req.body;
    const hashSalt = Auth.generatePassword(password);
    const hash = hashSalt.hash;
    const salt = hashSalt.salt;
    const newUser = {
      moderator: req.body.moderator,   
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      cpf: req.body.cpf,
      address:req.body.address,
      salt: salt,
      hash: hash,
    };
    const user = await User.create(newUser);
    return res.status(201).json({message:"User created", user});
  } catch(err){
    return res.status(500).json({error:err})
  }
};

const update = async(req, res) => {
  const {id} = req.params;
  try {
    const [updated] = await User.update(req.body, {where: {id: id}});
    if (updated){
      const user = await User.findByPk(id); 
      return res.status(200).send(user);
    }
    throw new Error();
    
  }catch(err){
    return res.status(500).json({err});
  }
};


const destroy = async(req, res) => {
  const {id} = req.params;
  try {
    const user = await User.destroy({where: {id: id}});
    return res.status(200).json({user});
  }catch(err){
    return res.status(500).json({err});
  }
};



// Funções de relacionamentos 
const favorites = async(req, res) => {
  const {userid, productid} = req.params;
  try {
    const userFavorite = await User.findByPk(userid);
    const productFavorite = await Products.findByPk(productid);
    await userFavorite.addFavoring(productFavorite);
    return res
      .status(200)
      .json({message: "Favorited", productFavorite: productFavorite});
  } catch (err) {
    return res.status(500).json({message: "Not Favorited"});
  }
};

const unfavorites = async(req, res) => {
  const {userid, productid} = req.params;
  try {
    const userUnFavorite = await User.findByPk(userid);
    const productUnFavorite = await Products.findByPk(productid);
    await userUnFavorite.removeFavoring(productUnFavorite);
    return res
      .status(200)
      .json({message: "Unfavorited", productUnFavorite: productUnFavorite});
  } catch (err) {
    return res.status(500).json({message: "Adios"});
  }
};

const list = async(req, res) => {
  const {userid} = req.params;
  try {
    const list = await User.findByPk(userid, {include: "favoring"});
    return res.status(200).json({list});
  } catch (err) {
    return res.status(500).json({err});
    
  }
};



module.exports = {
  index, 
  show,
  create,
  update,
  destroy,
  favorites,
  unfavorites,
  list,
  
  
};
