const router = require('express').Router()
const User = require('../model/userMode')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

// Register
router.post('/register', async(req, res)=>{
    try {
        const isExist = await User.findOne({email: req.body.email})
        
        if(isExist){
          return res.status(500).json({msg: "Email is already taken"})
        }
  
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
  
        const newUser = await User.create({...req.body, password: hashedPassword})
  
        const {password, ...others} = newUser._doc
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '4h'})
  
        return res.status(201).json({others, token})
      } catch (error) {
          return res.status(500).json(error.message)
      }
})

//login 

router.post("/login", async(req, res) => {
    try {
      const user = await User.findOne({email: req.body.email})
      console.log(user);
      if(!user){
        return res.status(500).json({msg: 'Wrong credentials. Try again!'})
      }
       const comparePass = await bcrypt.compare(req.body.password, user.password)
       if(!comparePass){
         return res.status(500).json({msg: 'Wrong credentials. Try again!'})
        }
        const {password, ...others} = user._doc
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '4h'})
        res.cookie('RealEstate',token, {expiresIn: '1d', httpOnly: true })
        console.log({others, token})
       return res.status(200).json({others, token})
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

module.exports = router