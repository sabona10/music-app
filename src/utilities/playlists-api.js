const BASE_URL = '/api/playlists';

export function getAll(authorId) {
    return fetch(`${BASE_URL}/${authorId._id}`)
        .then(res => res.json());
}

export function create(playlist) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(playlist)
    }).then(res => res.json());
}

export function update(playlist) {
    return fetch(`${BASE_URL}/${playlist._id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(playlist)
    }).then(res => res.json());
}

//basically just updates the playlist with the new one without the deleted song
export function deleteOne(playlist) {
    return fetch(`${BASE_URL}/deleteOne/${playlist._id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(playlist)
    }).then(res => res.json());
}

export function deletePlaylist(playlistId) {
    return fetch(`${BASE_URL}/deletePlaylist/${playlistId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      }
    });
}