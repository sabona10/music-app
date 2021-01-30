// const Playlist = require('../../models/playlist');
const YoutubeMusicApi = require('youtube-music-api')
const api = new YoutubeMusicApi()


module.exports = {
    mainIndex,
    result
};

async function mainIndex(req, res) {
    api.initalize() // Retrieves Innertube Config
        .then(info => {
            api.getSearchSuggestions(req.params.id).then(result => {
                //result is array [..]
                res.status(200).json(result);
            })
        })
    // const puppies = await Playlist.find({});
    // res.status(200).json(puppies);
}
async function result(req, res) {
    api.initalize() // Retrieves Innertube Config
        .then(info => {
            api.search(req.params.id, "song").then(result => {
                //result is array [..]
                // console.log(result);
                res.status(200).json(result);
            })
        })
    // const puppies = await Playlist.find({});
    // res.status(200).json(puppies);
}