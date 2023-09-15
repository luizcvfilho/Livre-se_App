const Evaluate = require("../models/Evaluate");
const User = require("../models/User");

const index = async (req, res) => {
  try {
    const evaluate = await Evaluate.findAll();
    return res.status(200).json({ evaluate });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const show = async (req, res) => {
  const { id } = req.params;
  try {
    const evaluate = await Evaluate.findByPk(id);
    return res.status(200).json({ evaluate });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const create = async (req, res) => {
  try {
    const newContent = {
      content: req.body.content,
    };
    const evaluate = await Evaluate.create(newContent);
    return res.status(201).json({ message: "Posted content", evaluate });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const destroy = async (req, res) => {
    const {id} =req.params;
    try {
        const evaluate = await Evaluate.destroy({where: {id: id}});
        return res.status(200).json({message: "Deleted content", evaluate});

    } catch (err) {
        return res.status(500).json({err});
    }
};

// Relações

// Adicionar Comentário ao Usuário
const addEvaluate = async(req, res) => {
  const { userId, evaluateId} = req.params;
  try {
    const user = await User.findByPk(userId);
    const evaluate = await Evaluate.findByPk(evaluateId);
    await evaluate.setUser(user);
    return res
      .status(200)
      .json({message: "Evaluate add User", evaluate: evaluate});  
  } catch (err) {
    return res,status(500).json({message: "Error", Error: err});
  }
};





module.exports = {
    index,
    show,
    create,
    destroy,
    addEvaluate,
    
};