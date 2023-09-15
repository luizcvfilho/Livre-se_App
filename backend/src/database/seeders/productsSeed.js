const Products = require('../../models/Products');
const faker = require('faker-br');


const productsSeed = async function (){
    try {
        await Products.sync({force: true});


        for(let i = 0; i <= 5; i++){
            await Products.create({
                author: faker.name.firstName(),
                title: faker.name.title(),
                publishers: faker.company.companyName(),
                genre:'Promoções',
                synopsis:faker.lorem.paragraph(),
                publicationYear:faker.date.past(),
                price:faker.commerce.price(10, 800),
                image:faker.image.abstract(),
            });
        }
    }catch(err){
        console.log(err);
    }
};

module.exports = productsSeed;