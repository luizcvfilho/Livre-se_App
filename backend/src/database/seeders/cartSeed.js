const Cart = require('../../models/Cart');
const faker = require('faker-br');

const cartSeed = async function (){
    try {
        await Cart.sync({force: true});

        for(let i = 0; i <= 5; i++){
            await Cart.create({
                amount:faker.random.number(2),
                point: faker.random.number(1),
                price:faker.commerce.price(2),
                payment:faker.random.boolean(),
            });
        };
    } catch (err) {
        console.log(err);
    }
};




module.exports = cartSeed;