
const mongoose = require('mongoose');
const URI = process.env.URI_DB;
require('dotenv').config({ path: '../config/.env' });


const connectDB = async () => {
    try {
        await mongoose
            .connect(
                URI,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
        console.log('MongoDb connected...')
    } catch (error) {
        console.log(error)
    }

}

module.exports = { connectDB }