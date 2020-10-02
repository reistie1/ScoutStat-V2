const router = require('express').Router()
const User = require('../models/user.model')
const passport = require('passport')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('../middleware/passport')(passport)
require('dotenv').config()

router.post('/register', async (req,res)=>{
    try{

        const {email,password,passwordCheck,displayName} = req.body

        if(!email || !password || !passwordCheck){
            return res.status(400).json({msg: "Not all fields have been entered"})
        }
        if(password.length < 5){
            return res.status(400).json({msg: "Password length needs to be greater than 5"})
        }
        if(passwordCheck !== password){
            return res.status(400).json({msg: "Password entered does not match, please try again"})
        }

        const existingUser = await User.findOne({email: email})

        if(existingUser){
            return res.status(400).json({msg: "An account with that email already exists"})
        }

        if(!displayName) displayName = email

        const salt = await bcrypt.genSalt(10)
        const passHash = await bcrypt.hash(password, salt)

        const newUser = new User({
            email,
            password: passHash,
            displayName: displayName
        })
        const savedUser = await newUser.save()
        res.json(savedUser)
    } catch(e){
        res.send(500).json({msg: e.message})
    }

})

router.post('/login', async (req,res)=>{

    if(req.body.password.length < 5){
        res.status(404).json({msg: "password is too short"})
    }

    if(!req.body.password) res.status(400).json({msg: "no password entered"})

    const userInfo = await User.findOne({email: req.body.email})
        .then(user => {
                const isMatch = bcrypt.compare(req.body.password,user.password, (err, result)=>{
                    if(err) res.status(404).json({msg: err})

                    if(result){
                        const payload = {
                            _id: user._id
                        }
                        const token = jwt.sign(payload, process.env.JWT_SECRET)
                        // res.cookie('token', token,{ httpOnly: true, secure: true })
                        res.status(200).send({ token })
                    }
                })
        }).catch(e=> res.status(404).json({msg: e.message}))
})

router.delete('/delete', async (req,res)=>{
    try{
        const deletedUser = await User.findByIdAndDelete(req.user)
        res.json(deletedUser)
    }catch(e){
        res.status(500).json({msg: e.message})
    }
})

router.post('/tokenIsValid', passport.authenticate('jwt', {session: false}),async (req,res)=>{
    res.status(200).json({msg: "success, User validated"})
})

router.get('/', passport.authenticate('jwt', {session: false}), async (req,res)=>{
    res.status(200).json({msg: "success, User validated"})
})

module.exports = router;