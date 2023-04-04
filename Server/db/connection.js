const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect(process.env.mongo_url,{
    useNewUrlParser: true , useUnifiedTopology: true
}).then(()=>{
    console.log(`Connection Successfull`);
}).catch((err)=>{
    console.log(err);
})