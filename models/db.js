const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: String,
    data: Buffer,
    mimetype: String,
    createDat: {type: Date, default: Date.now}
},{
    collection: "images",
    versionKey: false
});

module.exports = mongoose.model('', imageSchema)