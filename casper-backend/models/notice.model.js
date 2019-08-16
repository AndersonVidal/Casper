const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticeScheme = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    image_url: {
        type: String,
        required: true
    },
    topic: {
        type: String,
    },
    notice_url: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    creatAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Notices', noticeScheme);