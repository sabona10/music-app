import sendRequest from './send-request';
const BASE_URL = '/api/playlists';
// import { getToken } from './users-service';

export function getAll(authorId) {
    if(authorId === 'admin'){
        return sendRequest(`${BASE_URL}/${'admin'}`)
    }else{
        return sendRequest(`${BASE_URL}/${authorId._id}`)
    }
}
export function getOne(playlistId) {
    return sendRequest(`${BASE_URL}/one/${playlistId}`)
}

export function create(playlist) {
    return sendRequest(BASE_URL, 'POST', playlist);
}

export function update(playlist) {
    return sendRequest(`${BASE_URL}/${playlist._id}`,'PUT',playlist);
}
export function addOneToPlaylist(newPlaylist) {
    // fetch(`${BASE_URL}/one/${playlistId}`)
    //     .then(res => res = res.json())
    // let playlist = res;
    // playlist.songs = [...playlist.songs, newSong];
    return sendRequest(`${BASE_URL}/${newPlaylist._id}`, 'PUT',newPlaylist);
}

//basically just addOneToPlaylists the playlist with the new one without the deleted song
export function deleteOne(playlist) {
    return sendRequest(`${BASE_URL}/deleteOne/${playlist._id}`,'PUT',playlist);
}

export function deletePlaylist(playlistId) {
    return sendRequest(`${BASE_URL}/deletePlaylist/${playlistId}`, "DELETE");
}