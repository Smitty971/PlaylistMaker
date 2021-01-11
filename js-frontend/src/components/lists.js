
class Lists{

    constructor() {
        this.lists = []
        this.adapter = new ListAdapter()
        this.fetchAndLoadLists()
    }

    fetchAndLoadLists() {
        this.adapter.getLists().then(lists => {
            lists.data.forEach(list => this.lists.push(new List(list)))
            List.initBindingsAndEventListeners()
        console.log(List.all)})
        .then(() => {
            List.render();
        })
    }
}