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
    // console.log(req.user)
    req.body.user = req.user._id;
    const playlists = await Playlist.find({ author_id: req.params.id});
    res.status(200).json(playlists);
}

// async function browsePageResults(req, res) {
//     // const playlist = await Playlist.create(req.body);
//     const playlists = await Playlist.find({ author_id: 'admin' });

//     // for (let playlist = 0; playlist < playlists.length; playlist++) {
//     //     const element = playlists[playlist];
        
//     // }
//     res.status(200).json(playlists);

//     res.status(201).json(playlist);
// }
async function create(req, res) {
    // req.body.suer 
    req.body.user = req.user._id;
    const playlist = await Playlist.create(req.body);
    res.status(201).json(playlist);
}

async function show(req, res) {
    // console.log(req.user)
    req.body.user = req.user._id;
    // const playlist = await Playlist.findById(req.user._id);
    const playlist = await Playlist.findById(req.params.id);
    res.status(200).json(playlist);
}


async function update(req, res) {
    req.body.user = req.user._id;
    const updatedPlaylist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(updatedPlaylist);
}

async function deleteOne(req, res) {
    req.body.user = req.user._id;
    const updatedPlaylist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(updatedPlaylist);
}


async function deletePlaylist(req, res) {
    req.body.user = req.user._id;
    const deletePlaylist = await Playlist.findByIdAndRemove(req.params.id);
    res.status(200).json(deletePlaylist)
}