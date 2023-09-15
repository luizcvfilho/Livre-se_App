require('../../config/dotenv')();
require('../../config/sequelize');

const userSeed = require('./userSeeder');
const productsSeed = require('./productsSeed');
const cartSeed = require('./cartSeed');
const evaluateSeed = require('./evaluateSeed');

(async () => {
  try {
    await userSeed();
    await productsSeed();
    await cartSeed();
    await evaluateSeed();

  } catch(err) { console.log(err) }
})();
