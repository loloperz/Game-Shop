class Faqs extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadow.innerHTML =
      /*html*/`
        <style>
            footer{
                background-color:#EDF7C6;
                display:flex;
                align-items:center;
                color: #EA5656;
                justify-content: space-around;
            }
        </style>
  
        <footer>
        <h3>Preguntas Frecuentes</h3>
        <h3>Contacto</h3>
        <h3>Quién somos?</h3>
        <h3>Comunidad</h3>
        </footer>

      `
    }

    
}

customElements.define('faqs-component', Faqs);