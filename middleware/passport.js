const passport = require('passport')
const passportJWT = require('passport-jwt')
const ExtractJWT = require('passport-jwt').ExtractJwt;
const UserModel = require('../models/user.model')
const JWTStrategy = passportJWT.Strategy

require('dotenv').config()

  const strategy = new JWTStrategy({
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
  }, (payload, done)=>{
      UserModel.findOne({_id: payload._id})
      .then(user => {
          if(user){
            done(null, user)
          }else{
            done(null, false)
          }
      }).catch(err => done(err, null))
  })

module.exports = (passport)=>{
    passport.use(strategy)
}


