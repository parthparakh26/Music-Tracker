const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    albumArt: {
        data: Buffer, // Buffer data type to store image
        contentType: String // MIME type of the image
    },
    audioFile: {
        data: Buffer, // Buffer data type to store audio file
        contentType: String // MIME type of the audio file
    }
});

const Track = new mongoose.model('Track', trackSchema);

module.exports = Track;
