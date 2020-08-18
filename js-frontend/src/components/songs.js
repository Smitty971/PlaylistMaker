class Songs{
    constructor(){
        this.songs =[]
        this.adapter = new SongAdapter();
        this.fetchAndLoadSongs();
        this.initBindingsAndEventListeners();
    }

    initBindingsAndEventListeners() {
        this.songContainer = document.getElementById("song-container");
        this.newSongTitle = document.querySelector(".form-group #songTitle");
        this.newSongArtist = document.querySelector(".form-group #songArtists");
        this.dropdownContainer = document.querySelector(".form-group # ListControlSelect");
        this.songForm = document.getElementById("strainForm");
        this.songForm.addEventListener("submit", this.createCard.bind(this));
        this.songContainer.addEventListener('click', e => this.deleteCard(e.target.id))
    }

    fetchAndLoadSongs(){
        this.adapter
        .getSongs()
        .then(songs => {
            songs.data.foreach(song =>
                this.songs.push(new Songs(song))
                );
        })
        .then(() => {

            this.render();
        });
    }

    createCard(e) {
        e.preventDefault();
        const artist = this.newSongArtist.value;
        const title = this.newSongTitle.value;
        const listId = this.dropdownContainer.value;
        this.adapter.createSong(artist, title, listId).then(song => {
            this.songs.push(new Song(song.data));
            this.newSongArtist.value = '';
            this.newSongTitle.value = '';

            this.render();
        })
    }

    deleteCard(id) {
        this.adapter.deleteSong(id).then(function(){
            let cardDiv = document.getElementById("card-" + id);
            cardDiv.parentElement.removeChild(cardDiv)
        })
            this.songs.forEach(i => {
                this.songs.splice(i,1)
            })
    }

    render() {
        this.songContainer.innerHTML = this.strains
        .map(song => song.renderCard())
        .join("");
    }

}