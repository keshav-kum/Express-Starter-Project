const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');

async function connectDb(){
    try {
        await mongoose.connect(serverConfig.DB_URL);
        console.log("sucessfully connect to the mongodb server");

    } catch (error) {
        console.log("not able to connect mongodb server");
        console.log(error);
    }
}

module.exports = connectDb;