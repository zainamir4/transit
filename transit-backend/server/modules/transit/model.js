import mongoose, { Schema } from 'mongoose';

const TransitSchema = new Schema({
    stop: {
        stopnum: Number,
        location: String,
        required: Boolean
    }
});


export default mongoose.model('Transit', TransitSchema)
