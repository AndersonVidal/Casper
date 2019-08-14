import mongoose, {
    Schema
} from 'mongoose';

const NoticeScheme = new Schema({
    title: {
        type: String,
        required
    },
    image_url: {
        type: String,
        required
    },
    topic: {
        type: [String],
    },
    notice_url: {
        type: String,
        required
    },
    description: {
        type: String
    }
});

export default mongoose.model('Notice', NoticeScheme);