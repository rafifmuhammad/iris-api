const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const irisSchema = new Schema({
    SepalLengthCm: {
        type: Number,
        required: [true, 'SepalLengthCm field is required']
    },
    SepalWidthCm: {
        type: Number,
        required: [true, 'SepalWidthCm field is required']
    },
    PetalLengthCm: {
        type: Number,
        required: [true, 'PetalLengthCm field is required']
    },
    PetalWidthCm: {
        type: Number,
        required: [true, 'PetalWidthCm field is required']
    },
    Species: {
        type: String,
        required: [true, 'Species field is required']
    }
});

const Iris = mongoose.model('iris', irisSchema);
module.exports = Iris;