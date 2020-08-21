class SongAdapter {
    constructor() {
        this.baseURL = "http://localhost:3000/songs"
    }

    getSongs() {
       return fetch(this.baseURL).then(res => res.json())
    }

    createSong(artist, title, listId) {
        const song = {
            artist: artist,
            title: title,
            list_id: listId
        }
        return fetch(this.baseURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',    
            },
            body: JSON.stringify({ song })
        })
        .then(res => res.json())
    }

    deleteSong(id) {
        return fetch(`${this.baseURL}/${id}`, {
            method: 'DELETE', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ "id": id })
        })
    }
}

