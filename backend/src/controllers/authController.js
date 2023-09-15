const User = require('../models/User');
const Auth = require('../config/auth');


const login = async(req, res) => {
  try{
    const user = await User.findOne({where: {email: req.body.email}});
    if(!user) return res.status(404).json({message: "User not found"});
    const {password} = req.body;
    if(Auth.checkPassword(password, user.dataValues.hash, user.dataValues.salt)){
      const token = Auth.generateJWT(user);
      return res.status(200).json({acess_token: token});
    } else{
      return res.status(401).json({message: "Password Invalidate"});
    }
  }catch(err){
    return res.status(500).json({Error: err})
  }
};



const getDetails = async(req, res) => {
  try{
    const token = Auth.getToken(req);
    const payload = Auth.decodeJwt(token);

    const user = await User.findByPk(payload.sub);
    if(!user) return res.status(404).json({ message: "User not Found"});
    return res.status(200).json({user: user});
  }catch(err){
    return res.status(500).json({Error: err})
  }  
};



module.exports = {
  login,
  getDetails
};
