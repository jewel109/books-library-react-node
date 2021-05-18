const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        // mongodb atlus is used. The google account that is signed in is 
        // fahimukta68582@gmail.com

        console.log(`mongodb connected in ${ conn.connection.host }`)
    
    } catch (error) {
        console.log(`the error is ${error}` )
        process.exit()
    }
}

module.exports = connectDb;