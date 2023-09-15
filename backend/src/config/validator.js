const { body, validationResult } = require("express-validator");

const validationUser = (method) => {
  switch (method) {
    case "create":
      return [
        body("name")
          .exists()
          .isLength({ min: 1 })
          .withMessage("Esse campo deve ser preenchido"),
        body("phoneNumber")
          .exists()
          .isLength({ min: 1, max: 14 })
          .withMessage("Preencha o cmpo corretamente"),
        body("email")
          .exists()
          .isEmail()
          .withMessage("Preencha o campo corretamente"),
        body("cpf")
          .exists()
          .isLength({ min: 1, max: 15 })
          .withMessage("Esse campo deve ser preenchido"),

        body("image")
          .exists()
          .isString()
          .withMessage("Preencha o cmpo corretamente"),

        body("password")
          .exists()
          .isLength({ min: 1, max: 8 })
          .withMessage("Preencha esse campo com letras e números"),
        body("address")
          .exists()
          .isString()
          .withMessage("Preencha o cmpo corretamente"),
      ];

    case "update":
      return [
        body("name")
          .isLength({ min: 1 })
          .withMessage("Esse campo deve ser preenchido"),
        body("phoneNumber")
          .isLength({ min: 13, max: 14 })
          .withMessage("Preencha o cmpo corretamente"),

        body("image").isString().withMessage("Preencha o cmpo corretamente"),
        body("password").isByteLength({ min: 1, max: 8 }).withMessage(""),
        body("address").isString().withMessage("Preencha o cmpo corretamente"),
      ];
  }
};

const validationProducts = (method) => {
  switch (method) {
    case "create":
      return [
        body("author").isString().withMessage("Esse campo deve ser preenchido"),
        body("title").isString().withMessage("Preencha o cmpo corretamente"),
        body("publishers")
          .isString()
          .withMessage("Preencha o campo corretamente"),
        body("genre").isString().withMessage("Esse campo deve ser preenchido"),
        body("synopsis").isString().withMessage("Preencha o cmpo corretamente"),
        body("publicationYear")

          .isNumeric()
          .withMessage("Esse campo deve ser preenchido"),
        body("price").isNumeric().withMessage("Preencha o cmpo corretamente"),
        body("image")
          .isString()
          .withMessage("Esse campo deve ser preenchido"),
      ];

    case "update":
      return [
        body("author").isString().withMessage("Esse campo deve ser preenchido"),
        body("title")

          .isString({ min: 13, max: 14 })
          .withMessage("Preencha o cmpo corretamente"),
        body("publishres")
          .isString()
          .withMessage("Preencha o campo corretamente"),
        body("genre").isString().withMessage("Esse campo deve ser preenchido"),
        body("synopsis").isString().withMessage("Preencha o cmpo corretamente"),
        body("publicationYear")
          .isString()
          .withMessage("Esse campo deve ser preenchido"),
        body("price").isNumeric().withMessage("Preencha o cmpo corretamente"),
        body("image").isString().withMessage("Esse campo deve ser preenchido"),
      ];
  }
};

module.exports = {
  validationUser,
  validationProducts,
};
