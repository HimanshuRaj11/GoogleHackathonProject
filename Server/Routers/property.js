const router = require("express").Router()
const User = require("../model/userMode")
const Property = require("../model/propertyModel")
const verifyToken = require('../middleware/verifyToken')
const multer = require("multer");

// get all
router.get('/getAll', async (req, res) => {
    try {
        const properties = await Property.find({})
        return res.status(200).json(properties)
    } catch (error) {
        return res.status(401).json({ error: 'Data Not Found' })
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

// get all types
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
router.get('/find/types', async (req, res) => {
    try {
        const beachType = await Property.countDocuments({ type: 'beach' })
        const mountainType = await Property.countDocuments({ type: 'mountain' })
        const villageType = await Property.countDocuments({ type: 'village' })

        return res.status(200).json({ beach: beachType, mountain: mountainType, village: villageType })
    } catch (error) {
        return res.status(500).json(error)
    }
})

// TODO FETCH INDIVIDUAL PROPERTY
router.get('/find/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('currentOwner', '-password')

        if (!property) {
            throw new Error('No such property with that id')
        } else {
            return res.status(200).json(property)
        }
    } catch (error) {
        return res.status(500).json(error)
    }
})


// create estate

// Handel Uploaded Image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1])
      }
});

const upload = multer({
    storage: storage,
});


router.post('/add-property', verifyToken, upload.single("image"), async (req, res) => {
    // console.log(req.file);
    const image = req.file.filename;
    try {
        const newProperty = await Property.create({ ...req.body, image, currentOwner: req.user.id })

        return res.status(201).json(newProperty)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error })

    }
})
// Get Own Properties

router.get('/:id', verifyToken, async (req, res) => {
    try {
        const property = await Property.find({ currentOwner: req.params.id })
        return res.status(200).json({ property })
    } catch (error) {
        console.log(error);
    }
})

// update estate
router.post('/update/:id', verifyToken, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
        const compareId = property.currentOwner.toString() === req.user.id.toString()
        if (!compareId) {
            throw new Error("You are not allowed to update other people properties")
        }

        const updatedProperty = await Property.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )

        return res.status(200).json({ updatedProperty, success: "Update Successfull" })
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
})

// delete estate
router.get('/delete/:id', verifyToken, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
        const compareId = property.currentOwner.toString() === req.user.id.toString()
        if (!compareId) {
            throw new Error("You are not allowed to delete other people properties")
        }

        await property.deleteOne()

        return res.status(200).json({ success: "Successfully delete" })
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)

    }
})

router.post('/search', async(req, res) => {
    const {search} = req.body;
    try {
        const data = await Property.find({
            $or: [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { location: { $regex: search, $options: 'i' } },
            ]
        });
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Server Error'})
    }

});

module.exports = router