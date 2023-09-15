const Evaluate = require('../../models/Evaluate');
const faker = require('faker-br');

const evaluateSeed = async function (){
    try {
      await Evaluate.sync({force: true});
  
      for (let i = 0; i <= 5; i++) {
        
        await Evaluate.create({
          content: faker.lorem.text(),
        });
      } 
    
    }catch(err){
      console.log(err);
    }
  };
  
  module.exports = evaluateSeed;