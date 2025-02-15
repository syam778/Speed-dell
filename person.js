import mongoose from 'mongoose';
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    job: {
        type: String,
        required: true,
        enum: ['frontend', 'backend', 'fullstack', 'dataentry'],
    }, salary: {
        type: Number,
        required: true

    }

});
const person = mongoose.model('person', personSchema);
export default person;

