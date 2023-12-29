class Title extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.title = this.getAttribute('title')
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadow.innerHTML =
      /*html*/`
        <style>
            a:link, a:visited, a:active{
             text-decoration: none;
                }
            h1{
                color: #EA5656;
                margin: 0;
                font-size:7rem;
                text-shadow: 0px -0.5px 7px black;
            }
            .title{
                display:flex;
                justify-content:center;
                background-color:#EDF7C6;
                
            }
        </style>
  
        <div class="title">
           <a href="index.html"> <h1>${this.title}</h1></a>
        </div>
      `
    }

    
}

customElements.define('title-component', Title);