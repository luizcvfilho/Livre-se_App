const Cart = require("../models/Cart");
const CartProducts = require("../models/CartProducts");
const Products = require("../models/Products");
const User = require("../models/User");

const create = async (req, res) => {
  try {
    const newCart = {
      amount: req.body.amount,
      point: req.body.point,
      price: req.body.price,
      payment: req.body.payment,
    };
    const cart = await Cart.create(newCart);
    return res.status(201).json({ message: "Cart created", cart });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

/* Funções de relacionamentos */

// Função para restartar o carrinho de pois do pagamento
const restartCart = async (req, res) => {
  const { userId, cartId } = req.params;
  try {
    const addPointUser = await User.findByPk(userId);
    const resetCart = await Cart.findByPk(cartId);

    

    // Variaveis
    let paymentId = resetCart.dataValues.payment;
    let pointCart = resetCart.dataValues.point;
    let pointUser = addPointUser.dataValues.point;

    // Soma dos Pontos do User e Cart
    let totalPointUser = pointUser + pointCart;

    if (paymentId === false) {
      await User.update({ point: totalPointUser }, { where: { id: userId } });
      
      await Cart.update(
        {
          amount: 0,
          point: 0,
          price: 0,
          payment: true,
        },
        { where: { id: cartId } }
      );
      
      // retira todos do carrinho depois do pagamento 
      await resetCart.setCartin(null);
      
      // O 'else' é para voltar ao estado inicial (false), usar o useState do React resolveria o 
      // problema de para falso depois do pagamento
    } else if (paymentId === true) {
      await Cart.update({ payment: false }, { where: { id: cartId } });
    }
    return res.status(200).send(" Cart Init for new sale");
  } catch (err) {
    return res.status(500).send("Internal error server");
  }
};

// Relacionamento com User


const addCart = async (req, res) => {
  const { cartId, userId } = req.params;
  try {
    const user = await User.findByPk(userId);
    const cart = await Cart.findByPk(cartId);
    await cart.setUser(user);
    return res.status(200).json({ message: "Cart add User", cart: cart });
  } catch (err) {
    return res.status(500).json({ message: "Error", Error: err });
  }
};

// Função que retorna o sistema de na compra pontuação
const pointing = (point, price) => {
  let count = 20;
  while (true) {
    if (price < count) {
      return 0;
    } else if (price === count) {
      return 1;
    } else if (price > count) {
      p = Math.floor(price / count) + point;
      return p;
    }
  }
};

// Função adiciona produtos no Carrinho
const addProduct = async (req, res) => {
  const { cartproductid, productcartid } = req.params;
  try {
    const cartAdd = await Cart.findByPk(cartproductid);
    const productAdd = await Products.findByPk(productcartid);

    // Variaves para calcular preço
    const priceCart = cartAdd.dataValues.price;
    const priceProduct = productAdd.dataValues.price;

    // Retorna o preço total dos pedidos no carrinho
    let totalPrice = priceCart + priceProduct;

    // Calculo da quandidade de produto no carrinho
    let count = cartAdd.dataValues.amount;
    count++;

    // Calculo dos pontos por compra
    let point = cartAdd.dataValues.point;
    let pointer = pointing(point, priceCart);

    await cartAdd.addCartin(productAdd);
    await Cart.update(
      {
        amount: count++,
        price: totalPrice,
        point: pointer,
      },
      {
        where: { id: cartproductid },
      }
    );
    return res.status(200).json({ message: "Add product", cartAdd: cartAdd });
  } catch (err) {
    return res.status(500).json({ message: "Error", error: err });
  }
};

// Função para decramentar os pontos
const decPoint = (point, price) => {
  let count = 20;
  while (true) {
    if (price < count) {
      return point - 1;
    } else if (price === count) {
      return point - 1;
    } else if (price > count) {
      let results = Math.abs(Math.floor(price / count) - point);
      return results;
    }
  }
};

const removeProduct = async (req, res) => {
  const { cartproductid, productcartid } = req.params;
  try {
    const removeCart = await Cart.findByPk(cartproductid);
    const removeProduct = await Products.findByPk(productcartid);

    // Remove quantidade de produto do carrinho
    let count = removeCart.dataValues.amount;
    count--;

    // Reduzir o valor do produto
    let priceCart = removeCart.dataValues.price;
    let priceProduct = removeProduct.dataValues.price;
    let minusPrice = priceCart - priceProduct;

    // Decrement Point
    let point = removeCart.dataValues.point;

    let decPointer = decPoint(point, priceCart);

    await removeCart.removeCartin(removeProduct);
    await Cart.update(
      {
        amount: count--,
        price: minusPrice,
        point: decPointer,
      },
      { where: { id: cartproductid } }
    );
    return res
      .status(200)
      .json({ message: "Remove product", removeProduct: removeProduct });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const list = async (req, res) => {
  const { cartproductid } = req.params;
  try {
    const list = await CartProducts.findAll({
      where: { cartproductid: cartproductid },
    });
    const productId = list.map((table) => table.productcartid);
    const listaAll = await Products.findAll({ where: { id: productId } });
    return res.status(200).json({ listaAll });
  } catch (err) {
    return res.status(500).json({ message: "Error", error: err });
  }
};

module.exports = {
  create,
  addProduct,
  removeProduct,
  list,
  addCart,
  restartCart,
};
