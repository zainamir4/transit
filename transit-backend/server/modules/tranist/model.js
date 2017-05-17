import mongoose, { Schema } from 'mongoose';

const TransitSchema = new Schema({
    stop: {
        stopnumer: Integer,
        location: String,
        required: true
    }
});


export default mongoose.model('Transit', TransitSchema)
