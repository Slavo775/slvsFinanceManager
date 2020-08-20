const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    testData: {
        type: String,
    }
});

const test = mongoose.model("Test", testSchema);

module.exports = test;
