const router = require('express').Router()
const User = require('../model/userMode')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const verifyToken = require('../middleware/verifyToken')
// Register
router.post('/register', async (req, res) => {
  try {
    const isExist = await User.findOne({ email: req.body.email })

    if (isExist) {
      return res.status(500).json({ msg: "Email is already taken" })
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const newUser = await User.create({ ...req.body, password: hashedPassword })

    const { password, ...others } = newUser._doc
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET)
    res.cookie('RealEstate', token)
    return res.status(201).json({ others, token , msg:"Register Successfull"})
  } catch (error) {
    return res.status(500).json({msg:error.message})
  }
})

//login 

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(500).json({ msg: 'Wrong credentials. Try again!' })
    }
    const comparePass = await bcrypt.compare(req.body.password, user.password)
    if (!comparePass) {
      return res.status(500).json({ msg: 'Wrong credentials. Try again!' })
    }
    const { password, ...others } = user._doc
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.cookie('RealEstate', token)

    return res.status(200).json({ others, token, msg: "Login Successfull" })
  } catch (err) {
    return res.status(500).json({ msg: 'Server Error!' })
  }
})

//Logout 

router.get('/logout', verifyToken, (req, res) => {
  res.clearCookie('RealEstate');
  res.clearCookie('realEstate');
  return res.status(200).json({ msg: 'Logout SuccessFull' });
});

//get user

router.get('/getUser', verifyToken, async(req,res)=>{
  try {
    const user = await User.findById({_id:req.user.id})
    return res.status(200).json({user})
  } catch (error) {
    return res.status(400).json({msg:"server error"})
  }
})

// Update User Profile

router.post('/update-user/:id', verifyToken, async(req, res)=>{
  try {
    const {id} = req.params
    const user = await User.findByIdAndUpdate({_id:id},{ $set: req.body },{ new: true })
    return res.status(201).json({msg:"Updated Successful"})
  } catch (error) {
    return res.status(403).json({msg:"Server error"})
  }
})

module.exports = router