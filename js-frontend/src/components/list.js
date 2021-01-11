class List{
    static all = []
    constructor(listJSON) {
        List.all.push(this)
        this.id = listJSON.attributes.id
        this.title = listJSON.attributes.title
    }

        static initBindingsAndEventListeners(){
          this.dropdownContainer = document.querySelector(".form-group #ListControlSelect")
        }

        static listInput(list){
        this.dropdownContainer.innerHTML += this.listHtml(list)
      }

      static listHtml(list){
        return `
          <option value="${list.id}">${list.title}</option>
        `
      }
      static render(){
        this.all.forEach(list => this.listInput(list))
    }
}