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
            api.search(req.params.id).then(result => {
                let newresult = {content:[]}
                for (let i = 0; i < result.content.length; i++) {
                    const element = result.content[i];
                    if (element.type === 'video' || element.type === 'song') newresult.content.push(element)
                    
                }
                //result is array [..]
                // console.log(result);
                res.status(200).json(newresult);
            })
        })
    // const puppies = await Playlist.find({});
    // res.status(200).json(puppies);
}