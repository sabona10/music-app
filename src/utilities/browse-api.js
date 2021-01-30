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

export function getSuggestion(term) {
    return fetch(`${BASE_URL}/${term}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body:''
    }).then(res => res.json());
    // return fetch(BASE_URL)
    //     .then(res => res);
}
export function getResult(term) {
    return fetch(`${BASE_URL}/result/${term}`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body:''
    }).then(res => res.json());
    // return fetch(BASE_URL)
    //     .then(res => res);
}
