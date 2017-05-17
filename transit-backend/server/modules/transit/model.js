import mongoose, { Schema } from 'mongoose';

const TransitSchema = new Schema({
    stopnum: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});


export default mongoose.model('Transit', TransitSchema)
