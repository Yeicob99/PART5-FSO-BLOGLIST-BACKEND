const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const dotEnv = require('dotenv').config();
const mongoDB = process.env.MONGODB_URI;
main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
    console.log('MongoDB is running');
}

module.exports = {mongoose, mongoDB};