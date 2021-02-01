const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// import User from './user'
// const songSchema = require('./song');
// const userSchema = require('./user');

// const userSchema = new Schema({
//     name: { type: String, required: true },
//     user_id: { type: String, required: true },
// });

const songSchema = new Schema({
    song_id: { type: String, required: true },
    song_name: { type: String, default: '' },
    duration: { type: Number, default: 0 },
    artist: { type: String, default: '' },
    thumbnail: { type: String, default: '' },
    created_at:{type:String, default:''},
    number:{type:String, default:''}

});

const playlistSchema = new Schema({
    list_Name: { type: String, required: true },
    songs: [songSchema],
    author_name: { type: String, required: true },
    author_id:{ type: String, required: true },
    // user:[userSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Playlist', playlistSchema);