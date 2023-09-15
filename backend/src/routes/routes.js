const { Router } = require("express");
const router = Router();

const userController = require("../controllers/userController");
const cartController = require("../controllers/cartController");
const productController = require("../controllers/productController");
const evaluateController = require("../controllers/evaluateController");

// autenticação
const authController = require('../controllers/authController');
const passport = require('passport');
require('../middlewares/passport')(passport);

router.use("/Private", passport.authenticate('jwt', {session: false}));



// const moderatorMiddleware = require('../middlewares/moderatorMiddleware');


// Rotas de autenticação do login:
router.post("/Login", authController.login);
router.get("/Private/getDetails", authController.getDetails);


// Rotas da Controller User
router.post("/User", userController.create);
router.get("/User/:id", userController.show);
router.get("/User", userController.index);
router.put("/User/update/:id", userController.update);
router.delete("/User/:id", userController.destroy);

// Rotas da Controller Products
router.post("/Product", productController.create);
router.get("/Product/:id", productController.show);
router.get("/Product", productController.index);
router.put("/Product/update/:id", productController.update);
router.delete("/Product/:id", productController.destroy);

// Rotas da Controller Evaluate
router.post("/Evaluate", evaluateController.create);
router.get("/Evaluate/:id", evaluateController.show);
router.get("/Evaluate", evaluateController.index);
router.delete("/Evaluate/:id", evaluateController.destroy);


// Restart Carrinho do Usuário depois do pagamento

router.put("/User/:userId/Cart/:cartId", cartController.restartCart);

// Rotas das Relações 


// Rotas favoritos
router.put("/Favorite/:userid/:productid", userController.favorites);
router.delete("/UnFavorite/:userid/:productid", userController.unfavorites);
router.get("/Favorites/:userid", userController.list );

// Rotas Cart<->Products
router.post("/Cart", cartController.create);
router.put("/Cart/:cartproductid/:productcartid", cartController.addProduct);
router.delete("/Cart/:cartproductid/:productcartid", cartController.removeProduct);
router.get("/Cart/:cartproductid", cartController.list);

// Rotas User<->Cart
router.put("/Cart/:cartId/User/:userId", cartController.addCart);


// Rotas Evaluate <-> User
router.put("/User/:userId/Evaluate/:evaluateId", evaluateController.addEvaluate);


module.exports = router;
