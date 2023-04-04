const router = require("express").Router()
const User = require("../model/userMode")
const Property = require("../model/propertyModel")
const verifyToken = require('../middleware/verifyToken')

// get all
router.get('/getAll', async(req,res) => {
    try {
        const properties = await Property.find({})
        return res.status(200).json(properties)
    } catch (error) {
        return res.status(401).json({error: 'Data Not Found'})
    }
})

// get featured
router.get('/find/featured', async (req, res) => {
    try {
        const featuredProperties = await Property.find({ featured: true }).populate("currentOwner", '-password')
        return res.status(200).json(featuredProperties)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// get all from type
router.get('/find', async (req, res) => {
    const type = req.query
    let properties = []
    try {
        if (type) {
            properties = await Property.find(type).populate("currentOwner", '-password')
        } else {
            properties = await Property.find({})
        }

        return res.status(200).json(properties)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// TODO FETCH TYPE OF PROPERTIES
router.get('/find/types', async(req, res) => {
    try {
       const beachType = await Property.countDocuments({type: 'beach'})
       const mountainType = await Property.countDocuments({type: 'mountain'})
       const villageType =  await Property.countDocuments({type: 'village'}) 

       return res.status(200).json({beach: beachType, mountain: mountainType, village: villageType})
    } catch (error) {
        return res.status(500).json(error) 
    }
})

// TODO FETCH INDIVIDUAL PROPERTY
router.get('/find/:id', async(req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('currentOwner', '-password')

        if(!property){
            throw new Error('No such property with that id')
        } else {
            return res.status(200).json(property)
        }
    } catch (error) {
        return res.status(500).json(error) 
    }
})

// create estate
router.post('/', verifyToken, async (req, res) => {
    try {
        const newProperty = await Property.create({ ...req.body, currentOwner: req.user.id })

        return res.status(201).json(newProperty)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// update estate
router.put('/update/:id', verifyToken, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
        const compareId = property.currentOwner.toString() === req.user.id.toString()
        if (!compareId) {
            throw new Error("You are not allowed to update other people properties")
        }

        const updatedProperty = await Property.findByIdAndUpdate(
            req.params.id,
            {$set: req.body}, 
            {new: true}
        )

        return res.status(200).json(updatedProperty)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// delete estate
router.put('/delete/:id', verifyToken, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
        const compareId = property.currentOwner.toString() === req.user.id.toString()
        if (!compareId) {
            throw new Error("You are not allowed to delete other people properties")
        }

        await property.deleteOne()

        return res.status(200).json({msg: "Successfully deleted property"})
    } catch (error) {
        return res.status(500).json(error)

    }
})

module.exports = router