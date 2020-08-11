class Lists{
    constructor() {
        this.lists = []
        this.adapter = new ListsAdapter()
        // this.bindEventListener()
        this.fetchAndLoadLists()
    }

    fetchAndLoadLists() {
        this.adapter.getLists().then(lists => {
            console.log(lists)
        })
    }
}