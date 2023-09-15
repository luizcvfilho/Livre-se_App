const passportJwt = require('passport-jwt');
const jwtStrategy = passportJwt.Strategy;
const extractJwt = passportJwt.ExtractJwt;

const fs = require('fs');
const path = require('path');
const User = require('../models/User');



const PUBLIC_KEY = fs
.readFileSync(path
  .join(__dirname, "..", "..", "id_rsa_pub.pem"), "utf8");

module.exports = (passport) => {
  passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUBLIC_KEY, 
    algorithms: ['RS256']
  },
    async function(payload, cb){
      await User.findByPk(payload.sub)
      .then((user) => {
        if (user){
          return cb(null, user)
        }else{
          return cb(null, false)
        }
      })
      .catch(err => {return cb(err)})
    }
  ));
};