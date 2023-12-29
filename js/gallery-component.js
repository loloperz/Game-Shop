class Gallery extends HTMLElement {

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
            .gallery{
                display:flex;
                align-items:center;
                justify-content:center;
                padding:0.5rem;
                gap:8rem;
                margin-bottom:2rem;
                
            }
            img{
                height:300px;
                width:300px:
                
            }
            a{
                box-shadow: 0px -1px 7px black;
            }
        </style>
  
        <div class="gallery">
            <a href="game-description.html"><img src="https://www.neoteo.com/wp-content/images/BAC2.jpg"></a>
            <a href="game-description.html"><img src="https://www.neoteo.com/wp-content/images/BAC2.jpg"></a>
            <a href="game-description.html"><img src="https://www.neoteo.com/wp-content/images/BAC2.jpg"></a>
        </div>
        <div class="gallery"> 
            <a href="game-description.html"><img src="https://www.neoteo.com/wp-content/images/BAC2.jpg"></a>
            <a href="game-description.html"><img src="https://www.neoteo.com/wp-content/images/BAC2.jpg"></a>
            <a href="game-description.html"><img src="https://www.neoteo.com/wp-content/images/BAC2.jpg"></a>
        </div>
       
      `
    }

    
}

customElements.define('gallery-component', Gallery);