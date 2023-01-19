/* module.exports = {
    mongoURI : 'mongodb+srv://amal:amal@startercluster.ljijw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
} */

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose
            .connect(
                "mongodb://localhost:27017/virtual-class-db-course",
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