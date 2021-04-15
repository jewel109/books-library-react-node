const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false
        })
        console.log(`mongodb connected in ${ conn.connection.host }`)
    
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectDb;