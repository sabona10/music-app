const BASE_URL = '/api/browse';

export function getAll() {
    // return fetch(BASE_URL, {
    //     method: "GET",
    //     headers: {
    //         "content-type": "application/json"
    //     },
    //     body:''
    // }).then(res => res.json());
    return fetch(BASE_URL)
        .then(res => res);
}
