const mongoose = require("mongoose");
const connectToDB = async (url) => {
    try {
        await mongoose.connect(url).then(() => { 
            console.log("Connected to MongoDB");
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToDB;