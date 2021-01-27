const Playlist = require('../../models/playlist');
// const YoutubeMusicApi = require('youtube-music-api')
// const api = new YoutubeMusicApi()


module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne,
    deletePlaylist
};


async function index(req, res) {
    // api.initalize() // Retrieves Innertube Config
    //     .then(info => {
    //         api.getSearchSuggestions("justin").then(result => {
    //             /*[
    //               'ne deve ne kush',
    //               'ne deve ne kush canlı',
    //               'ne deve ne kush lyrics',
    //               'ne deve ne kush konser',
    //               'ne deve ne kush cover',
    //               'ne deve ne kush sözleri',
    //               'ne deve ne kush akor'
    //             ]*/
    //             // return result;
    //             // console.log(result)
    //             res.status(200).json(result);
    //         })
    //     })
    const playlists = await Playlist.find({ author_id: req.params.id});
    res.status(200).json(playlists);
}

async function create(req, res) {
    const playlist = await Playlist.create(req.body);
    res.status(201).json(playlist);
}

async function show(req, res) {
    const playlist = await Playlist.findById(req.params.id);
    res.status(200).json(playlist);
}

async function update(req, res) {
    const updatedPlaylist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(updatedPlaylist);
}

async function deleteOne(req, res) {
    const updatedPlaylist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(updatedPlaylist);
}


async function deletePlaylist(req, res) {
    const deletePlaylist = await Playlist.findByIdAndRemove(req.params.id);
    res.status(200).json(deletePlaylist)
}