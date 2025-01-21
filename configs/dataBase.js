const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.MONGODB_URI)

db.on('connected', () => console.log('📊 Mongo connected'))
db.on('error', (err) => console.log(err.message, ' is mongo connected?'))
db.on('disconnected', () => console.log('mongo disconnected'))