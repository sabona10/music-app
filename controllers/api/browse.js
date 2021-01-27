// const Playlist = require('../../models/playlist');
const YoutubeMusicApi = require('youtube-music-api')
const api = new YoutubeMusicApi()


module.exports = {
    mainIndex
};

async function mainIndex(req, res) {
    api.initalize() // Retrieves Innertube Config
        .then(info => {
            api.getSearchSuggestions("justin").then(result => {
                //result is array [..]
                res.status(200).json(result);
            })
        })
    // const puppies = await Playlist.find({});
    // res.status(200).json(puppies);
}