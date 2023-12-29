class GameDescription extends HTMLElement {

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
            h2,h3,p{
                color:#EDF7C6;
            }
            .background{
                background-image:url("https://img.freepik.com/fotos-premium/fondo-carton-textura-papel-marron-oscuro-foto-alta-resolucion_463999-31.jpg");
                box-shadow: 0px -1px 7px black;
                border-radius:25px;
                margin-bottom:2rem;
                margin:0 10%;
                padding:2rem;
                gap:0.8rem;
                display:flex;
            }
            .description{
                min-width:50%;
                max-width:50%;
            
            }
           
            img{
                height:350px;
                width:280px;
                box-shadow: 0px -1px 7px black;
            }
            .add-cart{
                display:flex;
                align-items:flex-end;
            }
            .add-button{
                background-color:#EDF7C6;
                display: inline-block;
                width: 100px;
                height: 40px;  
                font-size: 15px; 
                border:none; 
                color: #EA5656;
                border-radius:5px;
                box-shadow: 0px -0.5px 7px black;
                
                
            }
        </style>
        <div class="background">
            <div class="description">
                <img src="https://www.neoteo.com/wp-content/images/BAC2.jpg">
                    <h2>TITULO</h2>
                    <h3>PRECIO X,XX €</h3>
                    <p>Descripcion</p>
                    <h3>Desarollador</h3>
            </div>
                <div class="add-cart">
                    <button class="add-button">Añadir al carrito</button>
                </div>
        </div>
      `
    }

    
}

customElements.define('game-description-component', GameDescription);