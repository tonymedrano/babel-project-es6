class Main {
    constructor (name) {
        this.name = name
        this.run()
    }
    run () {
        let div = document.createElement("div"); 
        let content = document.createTextNode(`Running ${ this.name }...`); 
        div.appendChild(content);
        document.body.appendChild(div)
    }
}

let app = new Main("God")
