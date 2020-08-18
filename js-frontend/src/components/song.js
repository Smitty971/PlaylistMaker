class Song{
    constructor(songJSON) {
        this.artist = songJSON.attributes.artist
        this.title = songJSON.attributes.title
        this.id = songJSON.id
        this.listTitle = songJSON.attributes.list.title
        this.listId = songJSON.attributes.list.id
    }

    renderCard(){
        return `
        <div class="card bg-dark text-white" id="card-${this.id}">
        <div class="card-header">
        <h3>&#10009; ${this.listTitle} &#10009;</h3>
        </div>
        <div class="card-body">
        <h5>&#9886; ${this.title} &#9887;</h5>
        <p>${this.artist}</p>
        <button type="submit" class="btn btn-danger btn-small" 
        id="${this.id}">&#9888;Remove this song&#9888;</button>
        </div>
        </div>
        `;
    }
}