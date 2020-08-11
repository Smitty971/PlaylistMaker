class ListAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/lists'
    }

    getLists() {
        return fetch(this.baseUrl).then(res =>res.json())
    }
}