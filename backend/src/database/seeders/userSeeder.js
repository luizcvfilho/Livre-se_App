const User = require('../../models/User');
const faker = require('faker-br');


const userSeed = async function (){
  try {
    await User.sync({force: true});

    for (let i = 0; i <= 5; i++) {
      
      await User.create({
        modarator: faker.random.boolean(),
        name:faker.name.firstName(),
        phoneNumber:faker.phone.phoneNumber(),
        email:faker.internet.email(),
        cpf:faker.br.cpf(),
        image:faker.random.image(),
        point:faker.random.number(),
        address:faker.address.city(),
      });
    } 
  
  }catch(err){
    console.log(err);
  }
};

module.exports = userSeed;