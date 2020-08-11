class Lists{
    constructor() {
        this.lists = []
        this.adapter = new ListAdapter()
        this.initBindingsAndEventListeners();
        this.fetchAndLoadLists()
    }

    initBindingsAndEventListeners(){
        this.dropdownContainer = document.querySelector(".form-group #ListControlSelect")
      }

    fetchAndLoadLists() {
        this.adapter.getLists().then(lists => {
            lists.data.forEach(list => this.lists.push(new List(list)))
        })
        .then(() => {
            this.render();
        })
    }

    listInput(list){
        this.dropdownContainer.innerHTML += this.listHtml(list)
      }

      listHtml(list){
        return `
          <option value="${list.id}">${list.title}</option>
        `
      }
      render(){
        this.lists.forEach(list => this.listInput(list))
      }
    
}